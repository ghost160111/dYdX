import ReactiveElement from "./ReactiveElement";

const SharedStateErrors = {
  setUniqueID: "You need to set unique ID for Dynamic CSS reference list!",
  specifyURL: "You need to specify URL of the dynamic CSS link!"
}

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
   * Most of the time, you won't need this method, because it is called automatically right in the base class (ReactiveElement)
   */
  public setComponent(context: ReactiveElement, name: string): void {
    Object.defineProperty(this.components, name, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: context
    });

    if (context && context.refProxy) {
      for (const [styleID] of this.cssListURLMap.entries()) {
        Object.defineProperty(context, styleID, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: false
        });
      }
    }
  }

  public async getComponent(name: any): Promise<ReactiveElement> {
    return new Promise<ReactiveElement>((resolve: (value: ReactiveElement) => void, reject: (reason?: any) => void): void => {
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
    if (!id) throw SharedStateErrors.setUniqueID;
    if (!url) throw SharedStateErrors.specifyURL;
  }

  public setCSSURL(id: string, url: string): SharedState {
    this.checkCSSProperties(id, url);
    this.cssListURLMap.set(id, url);

    return this;
  }

  public setLinkToRoot(context: ReactiveElement, styleID: string): void {
    let dynamicCSSURL: string = this.cssListURLMap.get(styleID);
    let root: ShadowRoot = context.$root;

    if (dynamicCSSURL) {
      let rootFirstChild: ChildNode = root.firstChild;
      let link: HTMLLinkElement = document.createElement("link");
      let hasChildNodes: boolean = root.hasChildNodes();

      link.rel = "stylesheet";
      link.href = dynamicCSSURL;

      if (hasChildNodes) {
        if (!context[styleID]) {
          root.insertBefore(link, rootFirstChild);
          context[styleID] = true;
        }
      }
    }
  }
}
