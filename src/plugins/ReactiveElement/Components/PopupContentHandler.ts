import BaseComponent from "./BaseComponent";

export default class PopupContentHandler extends BaseComponent {
  constructor(context: any) {
    super(context);
    this.controller = new AbortController();
  }

  public nodeList: NodeListOf<HTMLElement>;
  public controller: AbortController;

  public observeElements(): void {
    this.nodeList = this.context.querySelector(".content-hoverable");
    let hoverContentListener = this.hoverContent.bind(this.context);

    for (let i = 0; i < this.nodeList.length; ++i) {
      let node = this.nodeList[i];
      node.addEventListener("click", hoverContentListener, { signal: this.controller.signal });
    }
  }

  public hoverContent(event: any): void {
    if (event.target instanceof HTMLButtonElement) {
      alert(event.target.textContent);
    }
  }
}
