import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";

@DefineComponent({
  tag: "faq-view",
  template: /*html*/`
    <h1 ref-data="title"></h1>
  `
})
export default class FAQView extends ReactiveElement {
  constructor() {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true
      },
      styles: {
      }
    });
  }

  public data: {} = {
    title: "FAQ View"
  }
}
