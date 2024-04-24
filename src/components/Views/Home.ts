// @ts-ignore
import sass from "!css-loader!sass-loader!./styles/Home.scss";
import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";
import FigureText from "./components/FigureText";
import PostsSlider from "./components/PostsSlider";
import BlogsList from "./components/Blogs";
import RefContent from "./components/RefContent";
// @ts-ignore
import halfStar from "../../assets/images/half-star.svg";
// @ts-ignore
import DownArrow from "@/assets/images/down-arrow.svg";
// @ts-ignore
import CurlyLine from "@/assets/images/curly-line.svg";
// @ts-ignore
import RoundyFrame from "@/assets/images/roundy-img.svg";
import FAQList from "../Global/FAQList";

@DefineComponent({
  tag: "home-view",
  template: /*html*/`
    <div class="wrapper">
      <section class="intro">
        <h1 class="intro__hero-heading mt-116 mb-80" ref-data="title"></h1>
        <div class="intro__refs mb-80">
          <a class="intro__ref-link dydx-btn" ref="nav-items" href="/discover-initiatives">Discover RFPs</a>
          <a class="intro__ref-link dydx-btn dydx-btn--accent-brand dydx-btn--arrow-right-after-white" ref="nav-items" href="/apply-for-grant">Apply for grant</a>
        </div>
        <div class="intro__accomplishments mb-75" ref="accomplishments"></div>
        <div class="intro__down-arrow">
          <img class="down-arrow__img" src="${DownArrow}" alt="Down arrow" />
        </div>
      </section>
      <section class="projects" ref="projects-ref"></section>
      <section class="posts-slider mb-80" ref="posts-slider"></section>
      <section class="ref-blogs mb-100" ref="blogs-ref"></section>
      <section class="blogs" ref="blogs-list"></section>
      <section class="faq mt-160" ref="faq"></section>
      <section class="faq-list mt-80" ref="faq-list"></section>
      <section class="application-process mt-160" ref="application-process"></section>
    </div>
  `
})
export default class HomeView extends ReactiveElement {
  constructor() {
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
  }

  public data: {} = {
    title: "Powering the future of dYdX through community grants",
    figureTextList: [
      { figure: "100+", text: "projects funded" },
      { figure: "$3+ million", text: "awarded" },
      { figure: "4000+", text: "happy clients" }
    ],
    starStyles: /*css*/`
      .half-star {
        position: absolute;
        left: 118%;
        top: -2rem;
        transform: translate(-100%, 0);
      }
    `
  }

  public components: Record<string, HTMLElement> = {
    projectsReference: new RefContent(),
    blogsReference: new RefContent(),
    postsSlider: new PostsSlider(),
    blogsList: new BlogsList({
      filterBy: "Funding round",
      blogsURL: "https://tree-project-api.vercel.app/data/dydx-blogs.json",
      hideFilterOptions: true,
      hideTitle: true,
      hideButton: true
    }),
    faq: new RefContent({ hideLink: true }),
    faqList: new FAQList({
      faqList: [
        {
          title: "How do I apply?",
          content: /*html*/`
            <h3>Well, this is content of FAQ item!</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur dignissimos quae accusantium eveniet esse quibusdam aut, exercitationem non atque dolor quisquam fuga quis expedita. Exercitationem reprehenderit praesentium quos illum.</p>
          `
        },
        {
          title: "Can I apply as a U.S. based person/company?",
          content: /*html*/`
            <h3>Well, this is content of FAQ item!</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur dignissimos quae accusantium eveniet esse quibusdam aut, exercitationem non atque dolor quisquam fuga quis expedita. Exercitationem reprehenderit praesentium quos illum.</p>
          `
        },
        {
          title: "How I will be compensated?",
          content: /*html*/`
            <h3>Well, this is content of FAQ item!</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur dignissimos quae accusantium eveniet esse quibusdam aut, exercitationem non atque dolor quisquam fuga quis expedita. Exercitationem reprehenderit praesentium quos illum.</p>
          `
        },
        {
          title: "What type of project will qualify for a Grant?",
          content: /*html*/`
            <h3>Well, this is content of FAQ item!</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur dignissimos quae accusantium eveniet esse quibusdam aut, exercitationem non atque dolor quisquam fuga quis expedita. Exercitationem reprehenderit praesentium quos illum.</p>
          `
        },
        {
          title: "What is the application timeline? When can I expect to hear back?",
          content: /*html*/`
            <h3>Well, this is content of FAQ item!</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur dignissimos quae accusantium eveniet esse quibusdam aut, exercitationem non atque dolor quisquam fuga quis expedita. Exercitationem reprehenderit praesentium quos illum.</p>
          `
        },
        {
          title: "How can I increase my chances of getting funded?",
          content: /*html*/`
            <h3>Well, this is content of FAQ item!</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur dignissimos quae accusantium eveniet esse quibusdam aut, exercitationem non atque dolor quisquam fuga quis expedita. Exercitationem reprehenderit praesentium quos illum.</p>
          `
        },
        {
          title: "How often do you approve new Rounds of funding?",
          content: /*html*/`
            <h3>Well, this is content of FAQ item!</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur dignissimos quae accusantium eveniet esse quibusdam aut, exercitationem non atque dolor quisquam fuga quis expedita. Exercitationem reprehenderit praesentium quos illum.</p>
          `
        }
      ]
    }),
    applicationProcess: new RefContent({ hideLink: true })
  }

  public onConnected(): void {
    this.generateAccComponent();

    this.components["projectsReference"].innerHTML = /*html*/`
      <slot slot="title">Projects built with grants</slot>
      <slot slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</slot>
      <slot slot="link">View all funded projects</slot>
    `;
    this.components["projectsReference"].setAttribute("route-to", "/funded-grants");

    this.components["blogsReference"].innerHTML = /*html*/`
      <slot slot="title">
        <style>.half-star{position: absolute;left: 118%;top: -2rem;transform: translate(-100%, 0);}</style>
        What's new?<img class="half-star" src="${halfStar}" />
      </slot>
      <slot slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</slot>
      <slot slot="link">Read more on our blog</slot>
    `;
    this.components["blogsReference"].setAttribute("route-to", "/blog");

    this.components["faq"].innerHTML = /*html*/`
      <slot slot="title">
        <style>.roundy-frame{position:absolute;left:106%;top:-0.5rem;transform:translate(-100%,0);}</style>
        Frequently asked questions<img class="roundy-frame" src="${RoundyFrame}" />
      </slot>
      <slot slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</slot>
    `;

    this.components["applicationProcess"].innerHTML = /*html*/`
      <slot slot="title">
        <style>.curly-line{position:absolute;left:106%;top:2.8rem;transform:translate(-100%,0);}</style>
        Application Process<img class="curly-line" src="${CurlyLine}" />
      </slot>
      <slot slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</slot>
    `;

    this.shadowDOM.setContentToNode(this.refs["projects-ref"], this.components["projectsReference"]);
    this.shadowDOM.setContentToNode(this.refs["posts-slider"], this.components["postsSlider"]);
    this.shadowDOM.setContentToNode(this.refs["blogs-ref"], this.components["blogsReference"]);
    this.shadowDOM.setContentToNode(this.refs["blogs-list"], this.components["blogsList"]);
    this.shadowDOM.setContentToNode(this.refs["faq"], this.components["faq"]);
    this.shadowDOM.setContentToNode(this.refs["faq-list"], this.components["faqList"]);
    this.shadowDOM.setContentToNode(this.refs["application-process"], this.components["applicationProcess"]);
  }

  public events(): void {
    this.eventHandler.subscribe("nav-items", "click", this.preventDefaultHandler);
  }

  public preventDefaultHandler(event: any): void {
    event.preventDefault();
    const pathname = event.target.getAttribute("href");
    this.sharedState.components["header-navigation"].navigateTo(pathname);
  }

  public generateAccComponent(): void {
    this.refs["accomplishments"].innerHTML = "";

    for (let i = 0; i < this.refProxy["figureTextList"].length; ++i) {
      let item = this.refProxy["figureTextList"][i];
      let figureText = new FigureText();

      figureText.innerHTML = /*html*/`
        <span slot="figure">${item.figure}</span>
        <span slot="text">${item.text}</span>
      `;

      this.refs["accomplishments"].appendChild(figureText);
    }
  }
}
