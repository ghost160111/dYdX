// @ts-ignore
import sass from "!css-loader!sass-loader!./styles/AppMain.scss";
import { ReactiveElement } from "../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../plugins/ReactiveElement/Decorators/DefineComponent";

@DefineComponent({
  tag: "app-main",
  template: /*html*/`
    <main class="main">
      <div class="main-wrapper" ref="main-wrapper">
      </div>
    </main>
  `
})
export default class AppMain extends ReactiveElement {
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
}
