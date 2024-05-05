import { ReactiveElement } from "../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../plugins/ReactiveElement/Decorators/DefineComponent";
// @ts-ignore
import DownArrow from "@/assets/images/down-arrow.svg";
import FigureText from "./FigureText";
// @ts-ignore
import sass from "!css-loader!sass-loader!../styles/HomeIntro.scss";

export interface HomeIntroProps {
}

@DefineComponent({
  tag: "home-intro",
  template: /*html*/`
    <section class="intro">
      <h1 class="intro__hero-heading mt-116 mb-80 hero" ref-data="title"></h1>
      <div class="intro__refs mb-80">
        <a class="intro__ref-link dydx-btn" ref="nav-items" href="/discover-initiatives" ref-data="refTitles.refTitle1"></a>
        <a class="intro__ref-link dydx-btn dydx-btn--accent-brand dydx-btn--arrow-right-after-white" ref="nav-items" href="/apply-for-grant" ref-data="refTitles.refTitle2"></a>
      </div>
      <div class="intro__accomplishments mb-75" ref="accomplishments"></div>
      <div class="intro__down-arrow">
        <img ref-class="downArrowImg.class" ref-src="downArrowImg.src" ref-alt="downArrowImg.alt" ref="img" />
      </div>
      <div class="intro__counter" ref="counter"></div>
    </section>
  `
})
export default class HomeIntro extends ReactiveElement {
  constructor(props?: HomeIntroProps) {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true
      },
      styles: {
        sass,
        links: ["margins", "fonts"]
      },
      props
    });
  }

  //#region FIELDS
  public data: {} = {
    title: "Powering the future of dYdX through community grants",
    figureTextList: [
      { figure: "100+", text: "projects funded" },
      { figure: "$3+ million", text: "awarded" },
      { figure: "4000+", text: "happy clients" }
    ],
    refTitles: {
      refTitle1: "Discover RFPs",
      refTitle2: "Apply for grant"
    },
    downArrowImg: {
      class: "down-arrow__img",
      src: DownArrow,
      alt: "Down Arrow"
    },
    toggled: false
  }
  //#endregion

  //#region METHODS
  public onConnected(): void {
    this.generateAccComponent();
  }

  public events(): void {
    this.eventHandler.subscribe("nav-items", "nav-items-click", "click", this.preventDefaultHandler);
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
  //#endregion
}
