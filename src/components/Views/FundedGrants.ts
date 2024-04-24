import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";

@DefineComponent({
  tag: "funded-grants",
  template: /*html*/`
    <h1 ref-data="title"></h1>
  `
})
export default class FundedGrants extends ReactiveElement {
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
    title: "Funded Grants View"
  }
}
