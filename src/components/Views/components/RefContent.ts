// @ts-ignore
import sass from "!css-loader!sass-loader!../styles/RefComponent.scss";
import { ReactiveElement } from "../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../plugins/ReactiveElement/Decorators/DefineComponent";

interface IRefContentProps {
  hideLink?: boolean;
}

@DefineComponent({
  tag: "ref-content",
  template: /*html*/`
    <div class="ref">
      <h2 class="ref__title h-large">
        <slot name="title"></slot>
      </h2>
      <p class="ref__description p-large">
        <slot name="description"></slot>
      </p>
      <a class="ref__link p-large" ref="link" href="/">
        <slot name="link"></slot>
      </a>
    </div>
  `
})
export default class RefContent extends ReactiveElement {
  constructor(props?: IRefContentProps) {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true
      },
      styles: {
        sass
      },
      props
    });
  }

  public get routeTo(): string {
    return this.getAttribute("route-to");
  }

  public set routeTo(value: string) {
    this.setAttribute("route-to", value);
  }

  public static get observedAttributes(): string[] {
    return ["route-to"];
  }

  public onConnected(): void {
    if (this.props && this.props["hideLink"]) {
      this.refs["link"].style.display = "none";
    }

    this.refs["link"].setAttribute("href", this.routeTo);
  }

  public events(): void {
    this.eventHandler.subscribe("link", "click", this.navigateTo);
  }

  public navigateTo(event: any): void {
    event.preventDefault();
    let pathname = this.routeTo;
    this.sharedState.components["header-navigation"].navigateTo(pathname);
  }
}
