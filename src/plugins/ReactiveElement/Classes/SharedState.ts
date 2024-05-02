export default class SharedState {
  public components: {};
  public root: HTMLElement | null;
  public cssListURLMap: Map<string, string>;

  constructor(rootElement?: HTMLElement | null) {
    this.components = {};
    this.cssListURLMap = new Map<string, string>();

    if (!rootElement) throw Error("Root element is null, check your callstack, or the element just doesn't exist!");
    this.root = rootElement;
  }

  /**
   * @description
   * Most of the time, you won't need this method, because it is called automatically right in the base class (CustomHTMLElement)
   */
  public setComponent(context: any, name: string): void {
    Object.defineProperty(this.components, name, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: context
    });
  }

  public async getComponent(name: any): Promise<HTMLElement> {
    return new Promise<HTMLElement>((resolve: (value: HTMLElement) => void, reject: (reason?: any) => void): void => {
      const checkComponent = (): void => {
        if (this.components[name] !== undefined) {
          resolve(this.components[name]);
        } else {
          setTimeout(checkComponent);
        }
      }

      checkComponent();
    });
  }

  public checkCSSProperties(id: string, url: string): void {
    if (!id) {
      throw "You need to set unique ID for Dynamic CSS reference list!";
    }

    if (!url) {
      throw "You need to specify URL of the dynamic CSS link!";
    }
  }

  public setCSSURL(id: string, url: string): SharedState {
    this.checkCSSProperties(id, url);

    this.cssListURLMap.set(id, url);

    return this;
  }

  public setLinkToRoot(root: ShadowRoot, styleID: string): void {
    setTimeout(() => {
      let dynamicCSSURL: string = this.cssListURLMap.get(styleID);

      if (dynamicCSSURL) {
        let rootFirstChild: ChildNode = root.firstChild;
        let link: HTMLLinkElement = document.createElement("link");
        let hasChildNodes: boolean = root.hasChildNodes();

        link.rel = "stylesheet";
        link.href = dynamicCSSURL;

        if (hasChildNodes) {
          for (let i = 0; i < root.childNodes.length; ++i) {
            let childNode: ChildNode = root.childNodes[i];

            if (childNode instanceof HTMLLinkElement && childNode.href !== link.href) {
              root.insertBefore(link, rootFirstChild);
            } else if (!(childNode instanceof HTMLLinkElement)) {
              root.insertBefore(link, rootFirstChild);
            }
          }
        }
      }
    });
  }
}
