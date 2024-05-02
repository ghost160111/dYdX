export default class DynamicCSS {
  constructor(...cssContentList: string[]) {
    this.blob = new Blob([...cssContentList], { type: "text/css" });
    this.url = URL.createObjectURL(this.blob);

    this.link = document.createElement("link");
    this.link.rel = "stylesheet";
    this.link.href = this.url;

    document.head.appendChild(this.link);
  }

  protected blob: Blob;
  public url: string;
  public link: HTMLLinkElement;
}
