import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";
import Expandable from "./Expandable";

interface FaqItem {
  title: string;
  content: string;
}

interface IFAQListProps {
  faqList: FaqItem[];
}

@DefineComponent({
  tag: "faq-list",
  template: /*html*/`
    <div class="container-wrapper">
      <ul class="faq-list" ref="faq-list"></ul>
    </div>
  `
})
export default class FAQList extends ReactiveElement {
  constructor(props: IFAQListProps) {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true
      },
      styles: {
        css: /*css*/`
          .faq-list {
            list-style: none;
            border-bottom: 0.15rem solid var(--border-hover);
            padding: 0;
          }
        `
      },
      props
    });
  }

  public onConnected(): void {
    let faqList = this.props["faqList"];

    if (this.props && faqList.length > 0) {
      this.refs["faq-list"].innerHTML = "";

      for (let i = 0; i < faqList.length; ++i) {
        let li = document.createElement("li");
        let faqItem = faqList[i];
        let faqItemUI = new Expandable({
          title: faqItem["title"],
          content: faqItem["content"]
        });

        li.appendChild(faqItemUI);

        this.refs["faq-list"].appendChild(li);
      }
    }
  }
}
