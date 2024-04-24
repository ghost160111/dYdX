import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";

@DefineComponent({
  tag: "discover-initiatives",
  template: /*html*/`
    <h1 ref-data="title"></h1>
  `
})
export default class DiscoverInitiatives extends ReactiveElement {
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
    title: "Discover Initiatives"
  }
}
