import ReactiveApp, { ComponentsOptions } from "../plugins/ReactiveElement/App/ReactiveApp";
import AppFooter from "./Layout/Footer/AppFooter";
import AppHeader from "./Layout/Header/AppHeader";
import AppMain from "./Layout/Main/AppMain";
import ScrollTop from "./Global/ScrollTop";

export default class Main {
  private root: HTMLElement;
  private reactiveApp: ReactiveApp;
  private components: Record<string, ComponentsOptions>;

  public startApp(): void {
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
}
