import ReactiveApp, { ComponentsOptions } from "../plugins/ReactiveElement/App/ReactiveApp";
import AppFooter from "./Layout/Footer/AppFooter";
import AppHeader from "./Layout/Header/AppHeader";
import AppMain from "./Layout/Main/AppMain";
import ScrollTop from "./Global/ScrollTop";

export default class App {
  private root: HTMLElement;
  private reactiveApp: ReactiveApp;
  private components: Record<string, ComponentsOptions>;

  public main(): void {
    this.root = document.querySelector(".app-wrapper");

    this.components = {
      appHeader: {
        instance: new AppHeader(),
        setFadeTransition: {
          value: true
        }
      },
      appMain: {
        instance: new AppMain(),
        setFadeTransition: {
          value: true,
          duration: 1500
        }
      },
      appFooter: {
        instance: new AppFooter(),
        setFadeTransition: {
          value: true
        }
      },
      scrollTop: {
        instance: new ScrollTop()
      }
    }

    this.reactiveApp = new ReactiveApp(this.root, this.components);
    this.reactiveApp.render();
  }

  public deleteApp(): void {
    let app = document.getElementById("app");

    this.root.animate(
      [
        { opacity: 1 },
        { opacity: 0 }
      ],
      {
        easing: "linear",
        duration: 1000
      }
    );

    setTimeout(() => {
      this.root.animate(
        [
          { opacity: 0 },
          { opacity: 1 }
        ],
        {
          easing: "linear",
          duration: 1000
        }
      );
      this.root.innerHTML = /*html*/`
        <h1 style="font-size:4rem;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);">Good Bye!!!</h1>
      `;
    }, 1000);

    setTimeout(() => {
      this.root.animate(
        [
          { opacity: 1 },
          { opacity: 0 }
        ],
        {
          easing: "linear",
          duration: 1000
        }
      );

      app.animate(
        [
          { background: "black" }
        ],
        {
          easing: "linear",
          duration: 1000
        }
      );
    }, 2500);

    setTimeout(() => {
      this.root.innerHTML = "";

      app.style.background = "black";
    }, 3400);
  }
}
