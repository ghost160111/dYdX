import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";

@DefineComponent({
  tag: "program-expenses",
  template: /*html*/`
    <h1 ref-data="titles.title"></h1>
  `
})
export default class ProgramExpenses extends ReactiveElement {
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
    titles: {
      title: "Program Expenses View",
    }
  }
}
