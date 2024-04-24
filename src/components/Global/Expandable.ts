// @ts-ignore
import sass from "!css-loader!sass-loader!./styles/Expandable.scss";
import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";

interface IExpandableProps {
  title: string;
  content: string;
}

@DefineComponent({
  tag: "expandable-component",
  template: /*html*/`
    <div class="container">
      <span class="p-large container__title" ref="title" ref-data="props.title"></span>
      <button class="container__plus-btn" type="button" ref="plus"></button>
      <div class="container__content" ref="content" ref-data="props.content" set-html></div>
    </div>
  `
})
export default class Expandable extends ReactiveElement {
  constructor(props: IExpandableProps) {
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

  public data: {} = {
    props: this.props,
    isActive: false,
    height: 0,
    interval: null,
    contentRect: null
  }

  public events(): void {
    this.eventHandler.subscribe("title", "click", this.toggleComponent);
    this.eventHandler.subscribe("plus", "click", this.toggleComponent);
  }

  public closeHandler(event: any): void {
    if (!event.target.matches(".container__title") && !event.target.matches(".container__plus-btn")) {
      this.closeComponent();
    }
  }

  public toggleComponent(): void {
    this.refProxy["isActive"] = !this.refProxy["isActive"];
    return (this.refProxy["isActive"]) ? this.openComponent() : this.closeComponent();
  }

  public openComponent(): void {
    this.refs["content"].classList.add("container__content--active");
    this.refs["plus"].classList.add("container__plus-btn--active");
  }

  public closeComponent(): void {
    this.refs["content"].style.visibility = "hidden";
    this.refs["content"].style.opacity = "0";

    setTimeout(() => {
      this.refs["plus"].classList.remove("container__plus-btn--active");
      this.refs["content"].classList.remove("container__content--active");
      this.refs["content"].style.visibility = "";
      this.refs["content"].style.opacity = "";
    }, 300);
  }
}
