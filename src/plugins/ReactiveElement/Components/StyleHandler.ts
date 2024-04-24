import BaseComponent from "./BaseComponent";
import margins from "../Utils/StyleMargins";

type StyleSheet = {
  css: string;
  sass: string;
}

export default class StyleHandler extends BaseComponent {
  public hostStylesheet: CSSStyleSheet;
  public cssStylesheet: CSSStyleSheet;
  public sassStylesheet: CSSStyleSheet;

  protected hostBaseStyle: string = /*css*/`
    :host {
      transition: all 0.3s ease !important;
    }
  `;

  constructor(context: any) {
    super(context);

    this.hostStylesheet = new CSSStyleSheet();
    this.hostStylesheet.replaceSync(this.hostBaseStyle);
  }

  protected setupStylesheet(styles: string, type?: keyof StyleSheet) {
    if (!styles) throw "Styles is empty, enter your styles in string value!";
    if (typeof styles !== "string") throw "Styles should be string type!";

    if (type === "css") {
      this.cssStylesheet = new CSSStyleSheet();
      this.cssStylesheet.replaceSync(styles);
    } else if (type === "sass") {
      this.sassStylesheet = new CSSStyleSheet();
      this.sassStylesheet.replaceSync(styles);
    }
  }

  public setupCSS(css: string): void {
    this.setupStylesheet(css, "css");
  }

  public setupSASS(sass: string): void {
    let compiledSASS = this.getImportedSASS(sass);
    this.setupStylesheet(compiledSASS, "sass");
  }

  public getImportedSASS(importedSASS: any): string {
    return importedSASS[0][1];
  }

  public setupMargins() {
    const finalStyles = /*css*/`
      :host { transition: all 0.3s ease !important; }
      ${margins}
    `;

    this.hostStylesheet.replaceSync(finalStyles);
  }

  public disconnectedCallback(): void {
    this.hostStylesheet = null;
    this.cssStylesheet = null;
    this.sassStylesheet = null;

    for (let i = 0; i < this.context.$root.adoptedStyleSheets.length; ++i) {
      let adoptedStyleSheet = this.context.$root.adoptedStyleSheets[i];
      if (adoptedStyleSheet === this.hostStylesheet) {
        adoptedStyleSheet = null;
      }
    }
  }
}
