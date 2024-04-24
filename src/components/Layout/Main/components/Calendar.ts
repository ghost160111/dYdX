import { ReactiveElement } from "../../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../../plugins/ReactiveElement/Decorators/DefineComponent";

@DefineComponent({
  tag: "ui-calendar",
  template: /*html*/`
    <h1 ref-data="title"></h1>
  `
})
export default class UICalendar extends ReactiveElement {
  constructor() {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true
      },
      styles: {
        css: /*css*/`
          /* write css of this component! */
        `
      }
    });
  }

  public data: {} = {
    title: "This is Calendar component!"
  }
}
