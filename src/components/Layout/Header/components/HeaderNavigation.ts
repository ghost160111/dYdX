// @ts-ignore
import sass from "!css-loader!sass-loader!../styles/HeaderNavigation.scss";
import { ReactiveElement } from "../../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../../plugins/ReactiveElement/Decorators/DefineComponent";
import SocialLinks from "../../../Global/SocialLinks";
import routes from "./Routes";
import { Route, Routes } from "../../../../plugins/ReactiveElement/Interfaces/IRoutes";

export interface HeaderNavigationProps {
}

@DefineComponent({
  tag: "header-navigation",
  template: /*html*/`
    <div class="nav-wrapper">
      <ul class="nav-list" ref="nav-list">
        <li><a class="nav-list__item" ref="nav-items" href="/discover-initiatives">Discover Initiatives</a></li>
        <li><a class="nav-list__item" ref="nav-items" href="/funded-grants">Funded Grants</a></li>
        <li><a class="nav-list__item" ref="nav-items" href="/program-expenses">Program Expenses</a></li>
        <li><a class="nav-list__item" ref="nav-items" href="/blog">Blog</a></li>
        <li><a class="nav-list__item" ref="nav-items" href="/faq">FAQ</a></li>
        <li class="apply-link"><a class="nav-list__item dydx-btn dydx-btn--accent-brand" ref="nav-items" href="/apply-for-grant">Apply for grant</a></li>
        <li class="socials" ref="social-links"></li>
      </ul>
      <a class="nav-list__item dydx-btn dydx-btn--accent-brand dydx-btn--original-width" id="apply-ref" ref="nav-items" href="/apply-for-grant">Apply</a>
      <button
        class="menu-toggle-btn"
        ref="menu-toggle-btn"
        type="button"
      ></button>
    </div>
  `
})
export default class HeaderNavigation extends ReactiveElement {
  constructor(props?: HeaderNavigationProps) {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true,
      },
      styles: {
        sass
      },
      props
    });

    this.compileRouter();
  }

  public data: {} = {
    title: "Header Navigation",
    routeMatched: false,
    isMenuActive: false
  };

  public routes: Routes = routes;
  public compiledRoutes: Routes;

  public components: Record<string, HTMLElement> = {
    socialLinks: new SocialLinks()
  }

  public onConnected(): void {
    let handleRoutingRef = this.handleRouting.bind(this);
    setTimeout(handleRoutingRef);

    this.shadowDOM.setContentToNode(this.refs["social-links"], this.components["socialLinks"]);
  }

  public events(): void {
    this.eventHandler.subscribe("nav-items", "click", this.preventDefaultHandler);
    this.eventHandler.subscribe(window, "popstate", this.handleRouting);
    this.eventHandler.subscribe("menu-toggle-btn", "click", this.toggleMenuHandler);
  }

  public toggleMenuHandler(): void {
    this.refProxy["isMenuActive"] = !this.refProxy["isMenuActive"];

    if (this.refProxy["isMenuActive"]) {
      this.refs["menu-toggle-btn"].classList.add("menu-toggle-btn--active");
      this.refs["nav-list"].classList.add("nav-list--active");
    } else {
      this.refs["menu-toggle-btn"].classList.remove("menu-toggle-btn--active");
      this.refs["nav-list"].classList.remove("nav-list--active");
    }
  }

  //#region ROUTING METHODS
  public preventDefaultHandler(event: any): void {
    event.preventDefault();
    const pathname = event.target.getAttribute("href");

    if (window.location.pathname !== pathname) {
      this.navigateTo(pathname);
    }
  }

  public navigateTo(url: string): void {
    if (window.location.pathname !== url) {
      window.history.pushState(null, "", url);
      this.handleRouting();
    }
  }

  public compileRouter(): void {
    const routes = this.routes;
    let compiledRoutes: Routes = {};

    const observerNestedRoutes = (oldPropKey: string, nestedRouteKey: string, nestedProps: Route) => {
      let newPropKey = oldPropKey + nestedRouteKey;

      Object.defineProperty(compiledRoutes, newPropKey, {
        value: nestedProps,
        writable: true,
        configurable: true,
        enumerable: true
      });

      if (nestedProps.routes) {
        for (const [subNestedRouteKey, subNestedProps] of Object.entries(nestedProps.routes)) {
          observerNestedRoutes(newPropKey, subNestedRouteKey, subNestedProps);
        }
      }
    }

    for (const [key, props] of Object.entries(routes)) {
      if (props.routes) {
        for (const [nestedRoute, nestedProps] of Object.entries(props.routes)) {
          let newPropertyKey = key + nestedRoute;

          Object.defineProperty(compiledRoutes, newPropertyKey, {
            value: nestedProps,
            writable: true,
            configurable: true,
            enumerable: true
          });

          if (!nestedProps.routes) {
            break;
          }
          observerNestedRoutes(newPropertyKey, nestedRoute, nestedProps);
        }
      }

      Object.defineProperty(compiledRoutes, key, {
        value: props,
        writable: true,
        configurable: true,
        enumerable: true
      });
    }

    this.compiledRoutes = compiledRoutes;
  }

  public handleRouting(): void {
    const pathname = window.location.pathname;
    const mainWrapper = this.sharedState.components["app-main"].refs["main-wrapper"];
    this.sharedState.root.scrollTo({ behavior: "smooth", left: 0, top: 0 });

    this.refProxy["routeMatched"] = false;

    for (let j = 0; j < this.refs["nav-items"].length; ++j) {
      this.refs["nav-items"][j].classList.remove("nav-list__item--active");
    }

    for (let i = 0; i < this.refs["nav-items"].length; ++i) {
      let navItem = this.refs["nav-items"][i];

      if (navItem.getAttribute("href") === pathname) {
        navItem.classList.add("nav-list__item--active");
      }
    }

    for (const [path, props] of Object.entries(this.compiledRoutes)) {
      if (path === pathname && path !== "/") {
        mainWrapper.innerHTML = "";
        mainWrapper.appendChild(props.component);

        if (props.title) {
          document.title = "dYdX - " + props.title;
        } else {
          document.title = "dYdX";
        }

        this.refProxy["routeMatched"] = true;

        if (props.callback) {
          props.callback();
        }
        break;
      }
    }

    if (pathname === "/") {
      mainWrapper.innerHTML = "";
      mainWrapper.appendChild(this.routes["/"].component);
      document.title = "dYdX - " + this.routes["/"].title;
      return;
    }

    if (!this.refProxy["routeMatched"]) {
      mainWrapper.innerHTML = "";
      mainWrapper.appendChild(this.routes["error-404"].component);
      document.title = "dYdX - " + this.routes["error-404"].title;
    }

    this.refProxy["isMenuActive"] = false;
    this.refs["menu-toggle-btn"].classList.remove("menu-toggle-btn--active");
    this.refs["nav-list"].classList.remove("nav-list--active");
  }
  //#endregion
}
