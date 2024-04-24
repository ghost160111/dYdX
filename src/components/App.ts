import ReactiveApp from "../plugins/ReactiveElement/App/ReactiveApp";
import AppFooter from "./Footer/AppFooter";
import AppHeader from "./Header/AppHeader";
import AppMain from "./Main/AppMain";
import ScrollTop from "./Global/ScrollTop";

export default class Main {
  private root: HTMLElement;

  public startApp(): void {
    this.root = document.querySelector(".app-wrapper");

    let reactiveApp = new ReactiveApp(this.root, {
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
    });

    reactiveApp.render();
  }
}