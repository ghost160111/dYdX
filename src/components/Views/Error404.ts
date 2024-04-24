import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";

@DefineComponent({
  tag: "error-404",
  template: /*html*/`
    <h1 ref-data="title"></h1>
  `
})
export default class Error404 extends ReactiveElement {
  constructor() {
    super();
  }

  public data: {} = {
    title: "Error - 404"
  }
}
