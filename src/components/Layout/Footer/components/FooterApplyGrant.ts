// @ts-ignore
import sass from "!css-loader!sass-loader!../styles/FooterApplyGrant.scss";
import { ReactiveElement } from "../../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../../plugins/ReactiveElement/Decorators/DefineComponent";

@DefineComponent({
  tag: "footer-apply-grant",
  template: /*html*/`
    <div class="container">
      <p class="container__paragraph-large mb-16">Have a project in mind?</p>
      <h2 class="container__heading-large mb-40">Let's create something awesome.</h2>
      <a
        class="dydx-btn dydx-btn--accent-white dydx-btn--arrow-right-after-pink container__apply-for-grants-link mb-24"
        ref="ref-apply"
        href="/apply-for-grant"
      >Apply for grant</a>
    </div>
  `
})
export default class FooterApplyGrant extends ReactiveElement {
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
    this.eventHandler.subscribe("ref-apply", "click", this.moveToGrants);
  }

  public moveToGrants(event: MouseEvent): void {
    event.preventDefault();
    this.sharedState.components["header-navigation"].navigateTo("/apply-for-grant");
  }
}
