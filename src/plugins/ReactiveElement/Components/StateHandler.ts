import AttributesMap from "../Constants/AttributesMap";
import BaseComponent from "./BaseComponent";

export default class StateHandler extends BaseComponent {
  constructor(context: any) {
    super(context);
  }

  public refDataNodeList: NodeListOf<HTMLElement>;
  public _watch: Record<string, (newValue: any, oldValue: any) => void>;
  public watchers: { [key: string]: (newValue: any, oldValue: any) => void } = {};
  public _proxiedData: {};
  private attributesMap: Map<string, string> = AttributesMap;

  public watch(property: string, callback: (newValue: any, oldValue: any) => void): void {
    if (!this.watchers[property]) {
      this.watchers[property] = callback;
    }
  }

  protected _proxyHandler: ProxyHandler<{}> = {
    get: (target: {}, key: string): any => {
      const value: any = target[key];

      if (typeof value === "object" && value !== null) {
        return new Proxy(target[key], this._proxyHandler);
      }

      return value;
    },
    set: (target: {}, key: string, newValue: any): boolean => {
      const oldValue: any = target[key];

      if (oldValue !== newValue) {
        if (typeof newValue === "object" && newValue !== null) {
          newValue = new Proxy<{}>(newValue, this._proxyHandler);
        }

        target[key] = newValue;
        this.observeComponentHTML();
        this.triggerWatchers(key, newValue, oldValue);
      }

      return true;
    }
  }

  public setInitialState(): void {
    this._proxiedData = new Proxy<{}>(this.context.data, this._proxyHandler);
    this.context.refProxy = this._proxiedData;
    this.observeComponentHTML();
    this.observeWatchers();
  }

  protected triggerWatchers(key: string, newValue: any, oldValue: any): void {
    for (const [watchKey, callback] of Object.entries(this.watchers)) {
      if (watchKey.includes(".")) {
        let keys: string[] = watchKey.split(".");

        for (let i = 0; i < keys.length; ++i) {
          let propKey: string = keys[i];

          if (propKey === key) {
            callback(newValue, oldValue);
          }
        }
      } else {
        if (this.watchers[key]) {
          this.watchers[key](newValue, oldValue);
        }
      }
    }
  }

  protected observeWatchers(): void {
    this._watch = this.context.watch;

    if (this._watch) {
      for (const [key, value] of Object.entries(this._watch)) {
        this.watch(key, value);
      }
    }
  }

  protected getNestedValue(refAttrValue: string): any {
    let nestedKeys: string[] = refAttrValue.split(".");
    let nestedValue: any = this._proxiedData;

    for (let j = 0; j < nestedKeys.length; ++j) {
      const key = nestedKeys[j];

      if (nestedValue.hasOwnProperty(key)) {
        nestedValue = nestedValue[key];
      } else {
        nestedValue = undefined;
        break;
      }
    }

    return nestedValue;
  }

  protected updateRefDataNodes(nodeList: NodeListOf<HTMLElement>): void {
    if (nodeList.length >= 1) {
      for (let i = 0; i < nodeList.length; ++i) {
        let refDataNode: HTMLElement = nodeList[i];
        let refDataAttrValue: string = refDataNode.getAttribute("ref-data");

        let nestedValue = this.getNestedValue(refDataAttrValue);

        this.updateDOM(refDataNode, nestedValue);
      }
    }
  }

  protected updateDOM(refDataNode: HTMLElement, nestedValue: any): void {
    try {
      nestedValue = nestedValue.toString();

      if (refDataNode instanceof HTMLButtonElement || refDataNode instanceof HTMLTextAreaElement) {
        refDataNode.textContent = nestedValue;
      } else {
        if (refDataNode.hasAttribute("set-html")) {
          refDataNode.innerHTML = nestedValue;
        } else {
          refDataNode.textContent = nestedValue;
        }
      }
    } catch (err: any) {
      if (this.context.devMode) {
        console.log(err);
      }
    }
  }

  protected updateAttrDOM(): void {
    try {
      const rootChildren: HTMLCollection = this.context.$root.children;

      const observeChildren = (children: HTMLCollection) => {
        if (children.length === 0) {
          return;
        }

        for (let i = 0; i < children.length; ++i) {
          const child: Element = children[i];
          const refAttrNameList: string[] = child.getAttributeNames();

          for (let j = 0; j < refAttrNameList.length; ++j) {
            const refAttrName: string = refAttrNameList[j];
            const isAttrMapHasAttr: boolean = this.attributesMap.has(refAttrName);
            const refAttrValue = child.getAttribute(refAttrName);

            if (this.context.devMode) {
              console.log(isAttrMapHasAttr, refAttrName, refAttrValue);
            }

            if (isAttrMapHasAttr) {
              let nestedValue = this.getNestedValue(refAttrValue);

              child.setAttribute(this.attributesMap.get(refAttrName), nestedValue);
            }
          }

          if (child.children.length > 0) {
            observeChildren(child.children);
          }
        }
      };

      if (rootChildren.length > 0) {
        observeChildren(rootChildren);
      }
    } catch (err) {
      if (this.context.devMode) {
        console.error(err);
      }
    }
  }

  public observeComponentHTML(): void {
    this.refDataNodeList = this.context.$root.querySelectorAll("[ref-data]");
    const nodeList = this.refDataNodeList;

    this.updateRefDataNodes(nodeList);
    this.updateAttrDOM();
  }

  public forceUpdate(): void {
    this.cleanUpEvents();
    this.context.eventHandler.unsubscribeEvents();

    let templateChildren = Array.from<HTMLCollection>(this.context.template.content.children);
    let rootChildren = Array.from<HTMLCollection>(this.context.$root.children);

    for (let i: number = 0; i < templateChildren.length; ++i) {
      let templateChild: HTMLCollection | HTMLElement = templateChildren[i];
      let rootChild: HTMLCollection | HTMLElement = rootChildren[i];

      rootChild["replaceWith"](templateChild);
    }

    this.updateRefs();
    this.updateState();
    this.updateEvents();
  }

  protected updateRefs(): void {
    if (this.context.shadowDOM) {
      this.context.shadowDOM.observeRefs();
    }
  }

  protected updateState(): void {
    if (this.context.stateHandler) {
      this.context.stateHandler.setInitialState();
    }
  }

  protected updateEvents(): void {
    if (this.context.events) {
      this.context.events();
    }
  }

  public cleanUpEvents(): void {
    if (this.context.events) {
      this.context.cleanUp();
    }
  }

  public disconnectedCallback(): void {
    this._proxiedData = null;
    this.refDataNodeList = null;
    this.watchers = null;
  }
}
