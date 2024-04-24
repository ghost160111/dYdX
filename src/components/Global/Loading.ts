// @ts-ignore
import sass from "!css-loader!sass-loader!./styles/Loading.scss";
import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";

@DefineComponent({
  tag: "loading-state",
  template: /*html*/`
    <div class="custom-loader-wrapper">
      <div class="custom-loader"></div>
    </div>
  `
})
export default class Loading extends ReactiveElement {
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
