// @ts-ignore
import sass from "!css-loader!sass-loader!./styles/AppHeader.scss";
import { ReactiveElement } from "../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../plugins/ReactiveElement/Decorators/DefineComponent";
import HeaderLogo from "./components/HeaderLogo";
import HeaderNavigation from "./components/HeaderNavigation";

@DefineComponent({
  tag: "app-header",
  template: /*html*/`
    <header class="header" ref="header">
      <div class="header-wrapper">
        <div id="test-component"></div>
        <nav class="nav" ref="navigation">
        </nav>
      </div>
    </header>
  `
})
export default class AppHeader extends ReactiveElement {
  constructor() {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true
      },
      styles: {
        sass
      }
    });
  }

  //#region FIELDS
  public components: Record<string, ReactiveElement> = {
    headerLogo: new HeaderLogo(),
    headerNavigation: new HeaderNavigation()
  }
  //#endregion

  //#region METHODS
  public onConnected(): void {
    this.refs["navigation"].append(
      this.components["headerLogo"],
      this.components["headerNavigation"]
    );
  }

  public events(): void {
    let appRoot: HTMLElement = document.querySelector("#app");
    this.eventHandler.subscribe(appRoot, "app-root-scroll", "scroll", this.onScrollChange);
  }

  public onScrollChange(event: any): void {
    return (event.target.scrollTop <= 0)
      ? this.refs["header"].classList.remove("header--scrolled")
      : this.refs["header"].classList.add("header--scrolled");
  }
  //#endregion
}
