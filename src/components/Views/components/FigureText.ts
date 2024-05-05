// @ts-ignore
import sass from "!css-loader!sass-loader!../styles/FigureText.scss";
import { ReactiveElement } from "../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../plugins/ReactiveElement/Decorators/DefineComponent";

export interface FigureTextProps {
}

@DefineComponent({
  tag: "figure-text",
  template: /*html*/`
    <div class="wrapper">
      <slot ref="figure" class="figure" name="figure"></slot>
      <slot ref="text" class="text" name="text"></slot>
    </div>
  `
})
export default class FigureText extends ReactiveElement {
  constructor(props?: FigureTextProps) {
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

  //#region METHODS
  public onConnected(): void {
    let slots = this.querySelectorAll("[slot]");

    for (let i = 0; i < slots.length; ++i) {
      let slot = slots[i];

      if (!(slot instanceof HTMLSpanElement)) {
        this.refs["figure"].remove();
        this.refs["text"].remove();
        throw "Assigned slot is not an instance of HTMLSpanElement, put span element to slot!";
      }
    }
  }
  //#endregion
}
