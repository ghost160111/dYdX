/**
 * @description
 * This class instance dynamically sets CSS file to head by default,
 * and also you can retrieve its URL for your custom manipulations.
 */
export default class DynamicCSS {
  protected blob: Blob;
  public url: string;
  public link: HTMLLinkElement;

  constructor(...cssContentList: string[]) {
    this.constructFile(...cssContentList);
  }

  public constructFile(...cssContentList: string[]): void {
    this.blob = new Blob([...cssContentList], { type: "text/css" });
    this.url = URL.createObjectURL(this.blob);

    this.link = document.createElement("link");
    this.link.rel = "stylesheet";
    this.link.href = this.url;

    document.head.appendChild(this.link);
  }
}
