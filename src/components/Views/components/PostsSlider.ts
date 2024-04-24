// @ts-ignore
import sass from "!css-loader!sass-loader!../styles/PostsSlider.scss";
import { ReactiveElement } from "../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../plugins/ReactiveElement/Decorators/DefineComponent";
import PostCard, { IPostCard } from "./PostCard";

@DefineComponent({
  tag: "posts-slider",
  template: /*html*/`
    <div
      class="slider-container"
      ref="slider-container"
    ></div>
    <button
      ref="slide-btn"
      class="slide-btn"
      type="button"
    ></button>
  `
})
export default class PostsSlider extends ReactiveElement {
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

  public data: {
    counter: number
    postCardList: IPostCard[],
    postsURL: string,
    usersURL: string
  } = {
    counter: 0,
    postCardList: null,
    postsURL: "https://tree-project-api.vercel.app/data/dydx-posts.json",
    usersURL: "https://tree-project-api.vercel.app/data/dydx-users.json"
  }

  public onConnected(): void {
    this.renderPosts();
  }

  public events(): void {
    this.eventHandler.subscribe("slide-btn", "click", this.slideForward);
  }

  public slideForward(): void {
    this.refProxy["counter"]++;

    let postCard: HTMLElement = this.refs["post-cards"][this.refProxy["counter"]];
    let gapBetweenPostCards: number = 32;

    if (!postCard) {
      this.restartScroll();
      return;
    }

    let sliderScrollWidth: number = this.refs["slider-container"].scrollWidth;
    let sliderContainerWidth: number = this.refs["slider-container"].getClientRects()[0].width;
    let sliderContainerScrollLeftMax: number = Math.floor(Math.abs(sliderContainerWidth - sliderScrollWidth));

    this.refs["slider-container"].scrollLeft += postCard.getClientRects()[0].x - (gapBetweenPostCards / 2);

    if (this.refs["slider-container"].scrollLeft >= sliderContainerScrollLeftMax) {
      this.restartScroll();
    }
  }

  public restartScroll(): void {
    this.refProxy["counter"] = 0;
    this.refs["slider-container"].scrollLeft = 0;
  }

  public windowResizeHandler(): void {
    this.refs["slider-container"].scrollLeft = 0;
    this.refProxy["counter"] = 0;
  }

  public renderPosts(): void {
    this.getPosts(this.refProxy["postsURL"])
    .then((posts: IPostCard[]) => {
      this.refs["slider-container"].innerHTML = "";

      for (let i = 0; i < posts.length; ++i) {
        const post = posts[i];
        const postCard = new PostCard();

        postCard.setAttribute("ref", "post-cards");
        postCard.innerHTML = /*html*/`
          <slot slot="fund-type">${post.fundType}</slot>
          <slot slot="title">${post.title}</slot>
          <slot slot="funding-amount-min">${post.fundingAmount.min}$</slot>
          <slot slot="funding-amount-max">${post.fundingAmount.max}$</slot>
          <slot slot="description">${post.description}</slot>
        `;

        this.refs["slider-container"].appendChild(postCard);
      }

      this.shadowDOM.observeRefs();
    })
    .catch((err) => console.error(err));
  }

  public async getPosts(url: string): Promise<IPostCard[]> {
    const data = await fetch(url);
    const json = await data.json();
    return await json;
  }
}
