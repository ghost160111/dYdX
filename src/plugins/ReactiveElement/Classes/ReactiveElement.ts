import FadeTransition from "../../FadeTransition/FadeTransition";
import PopupContentHandler from "../Components/PopupContentHandler";
import {
  BaseHandler,
  ShadowDOMHandler,
  StyleHandler,
  StateHandler,
  AnimationHandler,
  EventHandler,
  ICustomElement,
  ISetupConfig,
  defaultConfig
} from "../ReactiveElementLib";
import SharedState from "./SharedState";

/**
 * @description
 * SharedState is speacial object that simply shares the reference of all registered components through member variable defined in CustomHTMLElement base class.
 *
 * @example
 * console.log(this.sharedState.components); // SharedState { components:{...} }
 */
export const sharedState = new SharedState(document.querySelector("#app"));

export interface UpdateChangedOptions {
  name: string;
  attrName: string;
  oldValue: any;
  newValue: any;
  callback: CallableFunction;
  timeout?: number;
}

export type Watcher = Record<string, (newValue: any, oldValue: any) => void>;

export default class ReactiveElement extends HTMLElement implements ICustomElement {
  public base: BaseHandler;
  public styles?: StyleHandler;
  public shadowDOM?: ShadowDOMHandler;
  public stateHandler?: StateHandler;
  public animationHandler?: AnimationHandler;
  public eventHandler?: EventHandler;
  public popupContentHandler?: PopupContentHandler;

  public $root?: ShadowRoot;
  public template: HTMLTemplateElement;
  protected templateContent: string;
  protected refs: {};
  public componentID: string;
  public eventHandlers: Record<string, Map<string | symbol, EventListener>>;

  protected componentConfig: ISetupConfig;
  protected controller: AbortController;
  protected components: Record<string, HTMLElement | InstanceType<CustomElementConstructor>>;
  protected devMode: boolean;
  protected sharedState: SharedState;

  public data: {};
  public refProxy: {};
  public watch: Watcher;

  public props: {};

  constructor(setupConfig?: ISetupConfig, components?: {}) {
    super();
    this.data = {};
    if (setupConfig && setupConfig.props) {
      this.props = setupConfig.props;
    }
    sharedState.setComponent(this, this.tagName.toLowerCase());
    this.constructComponent(setupConfig, components);
  }

  /**
   * @description
   * This method is responsible for bulding whole component from scratch.
   */
  private constructComponent(setupConfig?: ISetupConfig, components?: {}): void {
    this.setupShadow();

    this.eventHandlers = {};
    this.controller = new AbortController();
    this.devMode = false;

    this.template = document.createElement("template");

    if (this.render() !== "") {
      this.template.innerHTML = this.render();
    } else if (this.templateContent !== "") {
      this.template.innerHTML = this.templateContent;
    }

    this.$root.appendChild(this.template.content.cloneNode(true));

    if (setupConfig) {
      this.componentConfig = setupConfig;
    } else {
      this.componentConfig = defaultConfig;
    }

    this.components = components ?? {};
    this.componentID = Math.random().toString(16).slice(2);

    this.sharedState = sharedState;
  }

  /**
   * @description
   * This method is responsible for attaching shadow and defining $root member variable!
   */
  private setupShadow(): void {
    this.attachShadow({ mode: "open" });
    this.$root = this.shadowRoot;
  }

  /**
   * @description
   * This method is responsible for defining web component's different instance objects and properties!
   */
  private setupHandlers(setupConfig?: ISetupConfig): void {
    this.base = new BaseHandler(this);

    this.setupConfig(setupConfig);

    this.stateHandler = new StateHandler(this);
    this.stateHandler.setInitialState();

    this.eventHandler = new EventHandler(this);
  }

  private setupConfig(setupConfig?: ISetupConfig): void {
    if (setupConfig) {
      this.styles = new StyleHandler(this);

      if (setupConfig.animations) {
        this.animationHandler = new AnimationHandler(this);

        if (setupConfig.animations.setOpacityAnimation) {
          this.animationHandler.setFadeAnimation();
        }
      }

      if (setupConfig.styles) {
        if (setupConfig.styles.css || setupConfig.styles.sass) {
          if (setupConfig.styles.adds) {
            if (setupConfig.styles.adds.margins) {
              this.styles.setupMargins();
            }
          }
          this.$root.adoptedStyleSheets = [ this.styles.hostStylesheet ];

          if (setupConfig.styles.css) {
            this.styles.setupCSS(setupConfig.styles.css);
          } else if (setupConfig.styles.sass) {
            this.styles.setupSASS(setupConfig.styles.sass);
          } else if (setupConfig.styles.css && setupConfig.styles.sass) {
            this.styles.setupCSS(setupConfig.styles.css);
            this.styles.setupSASS(setupConfig.styles.sass);
          }

          if (this.styles.cssStylesheet) {
            this.$root.adoptedStyleSheets.push(this.styles.cssStylesheet);
          }

          if (this.styles.sassStylesheet) {
            this.$root.adoptedStyleSheets.push(this.styles.sassStylesheet);
          }
        }
      }

      if (setupConfig.shadowDOM) {
        this.shadowDOM = new ShadowDOMHandler(this);
      }

      if (setupConfig.devMode) {
        console.log("Dev mode is turned on...");
      }

      if (setupConfig.setFadeInTransition && setupConfig.setFadeInTransition.value) {
        new FadeTransition(this.$root, setupConfig.setFadeInTransition.duration ?? 1000);
      }
    }
  }

  /**
   * @description
   * This method is CustomElements API's lifecycle method, that is called when element is added to document!
   */
  private connectedCallback(): void {
    this.setupHandlers(this.componentConfig);
    this.onConnected();
    this.events();
  }

  /**
   * @description
   * This method is CustomElements API's lifecycle method, that is called when element is remove from document!
   */
  private disconnectedCallback(): void {
    this.base.destroy();
    this.onDisconnected();
  }

  /**
   * @description
   * This static getter that returns array of string values is CustomElements API's built in getter which returns element attributes that need to be dynamic!
   */
  public static get observedAttributes(): string[] {
    return [];
  }

  /**
   * @description
   * This method is lifycycle method of CustomElements API, and is called whenever returned attribute value from getter observedAttributes is changed!
   */
  public attributeChangedCallback(name: string, oldValue: any, newValue: any): void {
  }

  /**
   * @description
   * This method is responsible for just updating dynamic attributes much cleaner!
   */
  public updateChanged(options: UpdateChangedOptions): void {
    const { name, attrName, oldValue, newValue, callback, timeout } = options;

    if (name === attrName) {
      if (oldValue !== newValue) {
        setTimeout(() => {
          callback();
        }, timeout);
      }
    }
  }

  /**
   * @description
   * This method is called in connectedCallback lifecycle method after component is built, and every handler is ready!
   */
  public onConnected(): void {
  }

  /**
   * @description
   * This method is called in disconnectedCallback lifecycle method after component is dismounted or destroyed, to clean some objects maybe, or defined events!
   */
  public onDisconnected(): void {
  }

  /**
   * @description
   * This method is responsible for setting component template content!
   */
  public render(): string {
    return '';
  }

  /**
   * @description
   * This is just a field method where you can define events, it is called after onConnected lifecycle method
   */
  public events(): void {
  }

  /**
   * @description
   * This is the field method where can clean objects, or remove events that were defined by yourself
   * Because in general, if you use EventHandler class' subscribe method to subscribe event, it is automatically removes the references and event listeners for ya,
   * and also you can remove single event listeners, or remove them all by yourself, if you encounter cases where you need to remove event listeners.
   * It is done - using unsubscribe and unsubscribeEvents methods.
   */
  public cleanUp(): void {
  }

  /**
   * @description
   * This method just removes element from Document
   */
  public destroy(): void {
    this.remove();
  }

  /**
   * @description
   * This method hides element itself, by adding display to none, and setting visibility to hidden.
   */
  public hideImmediate(): void {
    this.style.opacity = "0";
    this.style.display = "none";
    this.style.visibility = "hidden";
  }

  /**
   * @description
   * This method hides element little bit slowly, with transition
   */
  public hide(): void {
    this.style.opacity = "0";
    setTimeout(() => {
      this.hideImmediate();
    }, 1000);
  }

  /**
   * @description
   * This method shows element, if it hidden
   */
  public show(): void {
    this.style.opacity = "1";
    this.style.display = "";
    this.style.visibility = "visible";
  }

  /**
   * @description
   * Just logs message to console, so that you are just calling it throght component
   */
  public log(message: any, ...optionalParams: any[]): void {
    console.log(message, ...optionalParams);
  }
}
