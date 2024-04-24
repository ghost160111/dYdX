import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";
// @ts-ignore
import TwitterLogo from "@/assets/images/TwitterLogo.svg";
// @ts-ignore
import DiscordLogo from "@/assets/images/DiscordLogo.svg";

@DefineComponent({
  tag: "social-links",
  template: /*html*/`
    <ul class="socials-list">
      <li>
        <a href="https://twitter.com" target="_blank">
          <img src="${TwitterLogo}" alt="Twitter logo" />
        </a>
      </li>
      <li>
        <a href="https://discord.com" target="_blank">
          <img src="${DiscordLogo}" alt="Discord logo" />
        </a>
      </li>
    </ul>
  `
})
export default class SocialLinks extends ReactiveElement {
  constructor() {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true
      },
      styles: {
        css: /*css*/`
          .socials-list {
            display: flex;
            list-style: none;
            gap: 2rem;
            padding: 0;
            margin: 0;
          }

          .socials-list > li > a {
            transition: all 0.3s ease;
          }

          .socials-list > li > a:hover {
            opacity: 0.75;
          }
        `
      }
    });
  }
}
