import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";
import BlogsList from "./components/Blogs";

@DefineComponent({
  tag: "blog-view",
  template: /*html*/`
    <div
      ref="container"
      class="container"
    ></div>
  `
})
export default class BlogView extends ReactiveElement {
  constructor() {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true
      }
    });
  }

  public components: Record<string, HTMLElement> = {
    blogList: new BlogsList({
      blogsURL: "https://tree-project-api.vercel.app/data/dydx-blogs.json",
      filterBy: "Latest"
    })
  }

  public onConnected(): void {
    this.refs["container"].innerHTML = "";
    this.refs["container"].appendChild(this.components["blogList"]);
  }
}
