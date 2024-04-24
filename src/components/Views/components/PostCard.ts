// @ts-ignore
import sass from "!css-loader!sass-loader!../styles/PostCard.scss";
import { ReactiveElement } from "../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../plugins/ReactiveElement/Decorators/DefineComponent";

export interface IFundingAmount {
  min: number;
  max: number;
}

export interface IPostCard {
  fundType: string;
  title: string;
  fundingAmount: IFundingAmount;
  description: string;
  teamUsernames: string[]
}

@DefineComponent({
  tag: "post-card",
  template: /*html*/`
    <div class="container">
      <div class="hidden-container"></div>
      <div class="container-wrapper">
        <span class="container__fund-type p-mono-medium">
          <slot name="fund-type"></slot>
        </span>
        <h3 class="container__title h-medium">
          <slot name="title"></slot>
        </h3>
        <span class="container__funding-amount p-mono-medium">
          Funding amount: <slot name="funding-amount-min"></slot> - <slot name="funding-amount-max"></slot>
        </span>
        <p class="container__description p-medium">
          <slot name="description"></slot>
        </p>
        <div class="container__avatars">
          <ul class="avatars__list"></ul>
        </div>
      </div>
    </div>
  `
})
export default class PostCard extends ReactiveElement {
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
