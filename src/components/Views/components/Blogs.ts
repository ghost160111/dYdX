// @ts-ignore
import sass from "!css-loader!sass-loader!../styles/Blogs.scss";
import { ReactiveElement } from "../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../plugins/ReactiveElement/Decorators/DefineComponent";
import Loading from "../../Global/Loading";
import Blog, { BlogProps, BlogType } from "./Blog";
import FetchError from "../../Global/FetchError";

export interface BlogsListProps {
  filterBy?: keyof BlogType;
  blogsURL: string;
  hideFilterOptions?: boolean;
  hideTitle?: boolean;
  hideButton?: boolean;
}

@DefineComponent({
  tag: "blogs-list",
  template: /*html*/`
    <div class="container">
      <h2
        class="container__title h-xlarge"
        ref="title"
        ref-data="title"
      ></h2>
      <ul
        class="container__filter-list"
        ref="filter-list"
      ></ul>
      <ul
        class="container__blogs-list"
        ref="blog-list"
      ></ul>
      <button
        class="container__load-more-btn dydx-btn"
        ref="load-more-btn"
        ref-data="loadMoreBtnText"
        ref-title="loadMoreBtnText"
      ></button>
    </div>
  `
})
export default class BlogsList extends ReactiveElement {
  constructor(props?: BlogsListProps) {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true
      },
      styles: {
        sass
      },
      setFadeInTransition: {
        value: true
      }
    });

    this.props = props;

    this.getBlogs(props.blogsURL)
    .then((blogs: BlogProps[]) => {
      this.data["blogs"] = blogs;
    })
    .catch((err) => {
      setTimeout(() => {
        this.refs["blog-list"].innerHTML = "";
        this.refs["blog-list"].appendChild(this.components["fetch-error"]);

        if (this.devMode) {
          console.error("Dev mode is on!!!", err);
        }
      }, 3000);
    });
  }

  public props: BlogsListProps;

  public components: Record<string, HTMLElement> = {
    "loading-state": new Loading(),
    "fetch-error": new FetchError({ errorMessage: "Couldn't load the requested data, sorry for inconvenience!" })
  }

  public data: {} = {
    title: "Blog",
    filterOptions: [
      { type: "Latest" },
      { type: "Funding round" },
      { type: "Spotlight" },
      { type: "News & updates" }
    ],
    blogs: null,
    timeout: null,
    initialLoad: false,
    loadMoreBtnText: "Load more posts"
  }

  public onConnected(): void {
    this.refs["load-more-btn"].classList.add("hide");

    if (this.props.hideFilterOptions) {
      this.refs["filter-list"].classList.add("hide");
    }

    if (this.props.hideTitle) {
      this.refs["title"].classList.add("hide");
    }

    if (!this.refProxy["initialLoad"]) {
      this.refs["blog-list"].innerHTML = "";
      this.refs["blog-list"].appendChild(this.components["loading-state"]);

      this.refProxy["timeout"] = setTimeout(() => {
        this.refs["blog-list"].innerHTML = "";

        for (let i: number = 0; i < this.refProxy["blogs"].length; ++i) {
          const blogProps: BlogProps = this.refProxy["blogs"][i];

          if (this.props && this.props.filterBy) {
            if (blogProps.type === this.props.filterBy) {
              this.createBlogComponent(blogProps);
            }

            if (this.props.filterBy === "Latest") {
              this.renderLatestNews(blogProps);
            }
          }
        }

        this.generateFilterList();
        this.events();

        this.refs["load-more-btn"].classList.remove("hide");
        this.refProxy["initialLoad"] = true;

        this.hideBlogs();

        if (this.props.hideButton) {
          this.refs["load-more-btn"].classList.add("hide");
        }
      }, 1500);
    }
  }

  public onDisconnected(): void {
    if (!this.refProxy["initialLoad"]) {
      clearTimeout(this.refProxy["timeout"]);
    }
  }

  public events(): void {
    this.eventHandler.subscribe("filter-btns", "click", this.filterHandler);
    this.eventHandler.subscribe("load-more-btn", "click", this.loadMoreBlogsHandler, { once: true });
    this.eventHandler.subscribe("text-input", "input", this.inputHandle);
  }

  public inputHandle(event: any): void {
    this.$root.querySelector("blog-component")["refProxy"]["imgURL"] = event.target.value;
  }

  public renderLoadingScene(): void {
    this.refs["blog-list"].appendChild(this.components["loading-state"]);
  }

  public async getBlogs(url: string): Promise<any> {
    const response: Response = await fetch(url);
    if (!response.ok) {
      throw "Response wasn't ok!";
    }
    const json: any = await response.json();
    return await json;
  }

  public createBlogComponent(blogProps: BlogProps): void {
    const blogComponent: Blog = new Blog(blogProps);
    const li: HTMLLIElement = document.createElement("li");

    blogComponent.setAttribute("ref", "blog-items");
    li.appendChild(blogComponent);
    this.refs["blog-list"].appendChild(li);
  }

  public renderLatestNews(blogProps: BlogProps): void {
    this.createBlogComponent(blogProps);
    // parse date and sort it accordingly!
  }

  public filterHandler(event: any): void {
    this.refs["blog-list"].innerHTML = "";

    for (let i: number = 0; i < this.refs["filter-btns"].length; ++i) {
      let filterBtn = this.refs["filter-btns"][i];
      filterBtn.classList.remove("filter-list__option-btn--active");
    }

    for (let i: number = 0; i < this.refProxy["blogs"].length; ++i) {
      let blogProps: BlogProps = this.refProxy["blogs"][i];

      if (event.target.getAttribute("filter-type") === blogProps.type) {
        this.createBlogComponent(blogProps);
        event.target.classList.add("filter-list__option-btn--active");
      } else if (event.target.getAttribute("filter-type") === "Latest") {
        this.renderLatestNews(blogProps);
        event.target.classList.add("filter-list__option-btn--active");
      }
    }

    this.hideBlogs();
  }

  public hideBlogs(): void {
    for (let i: number = 0 ; i < this.refs["blog-items"].length; ++i) {
      let blog: Blog = this.refs["blog-items"][i];
      if (i >= 6) {
        blog.hideImmediate();
      }
    }
  }

  public loadMoreBlogsHandler(): void {
    for (let i: number = 0; i < this.refs["blog-items"].length; ++i) {
      let blog: Blog = this.refs["blog-items"][i];
      blog.show();
    }
  }

  public generateFilterList(): void {
    this.refs["filter-list"].innerHTML = "";

    for (let i: number = 0; i < this.refProxy["filterOptions"].length; ++i) {
      let filterOption: { type: string } = this.refProxy["filterOptions"][i];
      let li: HTMLLIElement = document.createElement("li");

      li.innerHTML = /*html*/`
        <button
          class="dydx-btn dydx-btn--original-width dydx-btn--transparent filter-list__option-btn"
          type="button"
          ref="filter-btns"
          title="${filterOption.type}"
          filter-type="${filterOption.type}"
        >${filterOption.type}</button>
      `;

      this.refs["filter-list"].appendChild(li);
    }

    this.shadowDOM.observeRefs();
  }
}
