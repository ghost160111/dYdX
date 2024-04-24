// @ts-ignore
import sass from "!css-loader!sass-loader!./styles/ScrollTop.scss";
import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";

@DefineComponent({
  tag: "scroll-top",
  template: /*html*/`
    <button
      ref="scroll-top-btn"
      ref-data="title"
      type="button"
      class="scroll-to-top-btn"
    ></button>
  `
})
export default class ScrollTop extends ReactiveElement {
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

  public data: {} = {
    title: "Scroll to Top"
  }

  public events(): void {
    let appRoot: HTMLElement = document.querySelector("#app");

    if (!appRoot) {
      throw "No appRoot found, it is null!";
    }

    this.refs["scroll-top-btn"].classList.add("scroll-to-top-btn--hidden");

    this.eventHandler.subscribe("scroll-top-btn", "click", this.onClickBtnHandler, {}, appRoot);
    this.eventHandler.subscribe(appRoot, "scroll", this.onScrollHandler, {}, this.refs["scroll-top-btn"]);
  }

  public onClickBtnHandler(appRoot: HTMLElement): void {
    this.scrollToTop(appRoot);
  }

  public onScrollHandler(scrollTopBtn: HTMLElement, event?: any): void {
    if (event.target.scrollTop === 0) {
      scrollTopBtn.classList.add("scroll-to-top-btn--hidden");
    } else {
      scrollTopBtn.classList.remove("scroll-to-top-btn--hidden");
    }
  }

  public scrollToTop(node: HTMLElement): void {
    node.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0
    });
  }
}
