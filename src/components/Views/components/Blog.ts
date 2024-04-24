// @ts-ignore
import sass from "!css-loader!sass-loader!../styles/Blog.scss";
import { ReactiveElement } from "../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../plugins/ReactiveElement/Decorators/DefineComponent";

export type BlogType = {
  "Latest": string;
  "Funding round": string;
  "Spotlight": string;
  "News & updates": string;
}

export interface BlogProps {
  id: number;
  type: keyof BlogType;
  imgURL: string;
  title: string;
  datePosted: Date;
}

@DefineComponent({
  tag: "blog-component",
  template: /*html*/`
    <div class="container">
      <div class="container__img">
        <img alt="Blog image" ref="blog-img" ref-src="imgURL" ref-alt="title" />
      </div>
      <div class="container__content">
        <span class="content__type p-mono-medium" ref-data="type"></span>
        <h3 class="content__title h-medium mb-50 mt-10" ref-data="title"></h3>
        <time class="content__posted-date p-mono-medium" ref-data="datePosted"></time>
      </div>
    </div>
  `
})
export default class Blog extends ReactiveElement {
  constructor(props: BlogProps) {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true
      },
      styles: {
        sass,
        adds: {
          margins: true
        }
      }
    });

    this.data = props;
  }

  public data: {
    id: number,
    type: keyof BlogType,
    imgURL: string,
    title: string,
    datePosted: Date,
  };
}
