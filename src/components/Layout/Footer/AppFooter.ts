// @ts-ignore
import sass from "!css-loader!sass-loader!./styles/AppFooter.scss";
import { ReactiveElement } from "../../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../../plugins/ReactiveElement/Decorators/DefineComponent";
// @ts-ignore
import FooterLogo from "@/assets/images/FooterLogo.svg";
import FooterApplyGrant from "./components/FooterApplyGrant";
import SocialLinks from "../../Global/SocialLinks";

@DefineComponent({
  tag: "app-footer",
  template: /*html*/`
    <footer class="footer mt-75">
      <div class="footer-wrapper">
        <div class="footer__apply-grant mb-160" ref="footer-apply-grant"></div>
        <div class="footer__navs">
          <div class="footer__nav">
            <ul class="nav__list">
              <li><a class="nav__item" href="/">Home<img src="${FooterLogo}" alt="Footer logo" /></a></li>
              <li><a class="nav__item" ref="nav-items" href="/blog">Blog</a></li>
              <li><a class="nav__item" ref="nav-items" href="/faq">FAQ</a></li>
              <li><a class="nav__item" ref="nav-items" href="/brand-assets">Brand assets</a></li>
              <li><a class="nav__item nav__item--external-link" href="https://www.google.com" target="_blank">dYdX Foundation</a></li>
              <li><a class="nav__item nav__item--external-link" href="https://www.google.com" target="_blank">dYdX Trading</a></li>
            </ul>
          </div>
          <div class="footer__socials" ref="footer-socials"></div>
        </div>
      </div>
    </footer>
  `
})
export default class AppFooter extends ReactiveElement {
  constructor() {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true,
      },
      styles: {
        sass
      }
    });
  }

  public components: Record<string, HTMLElement> = {
    "footer-apply-grant": new FooterApplyGrant(),
    "social-links": new SocialLinks()
  }

  public onConnected(): void {
    this.shadowDOM.setContentToNode(this.refs["footer-apply-grant"], this.components["footer-apply-grant"]);
    this.shadowDOM.setContentToNode(this.refs["footer-socials"], this.components["social-links"]);
  }

  public events(): void {
    this.eventHandler.subscribe("nav-items", "click", this.preventDefaultHandler);
  }

  public preventDefaultHandler(event: any): void {
    event.preventDefault();
    const pathname = event.target.getAttribute("href");
    this.sharedState.components["header-navigation"].navigateTo(pathname);
  }
}
