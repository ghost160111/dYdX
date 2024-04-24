// @ts-ignore
import sass from "!css-loader!sass-loader!../styles/HeaderLogo.scss";
// @ts-ignore
import LogoSvg from "@/assets/images/Logo.svg";
import { ReactiveElement } from "../../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../../plugins/ReactiveElement/Decorators/DefineComponent";

@DefineComponent({
  tag: "header-logo",
  template: /*html*/`
    <div class="logo">
      <a class="logo__link" href="/" ref="logo">
        Home
        <img
          class="logo__img"
          src="${LogoSvg}"
          alt="dYdX Logo"
        />
      </a>
    </div>
  `
})
export default class HeaderLogo extends ReactiveElement {
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

  public events(): void {
    this.eventHandler.subscribe("logo", "click", this.preventDefault);
  }

  public preventDefault(event: any): void {
    event.preventDefault();
    this.sharedState.components["header-navigation"].navigateTo("/");
  }
}
