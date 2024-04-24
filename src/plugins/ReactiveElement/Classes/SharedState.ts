export default class SharedState {
  public components: {};
  public root: HTMLElement | null;

  constructor(rootElement?: HTMLElement | null) {
    this.components = {};

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
}
