import AnimationHandler from "./Components/AnimationHandler";
import BaseHandler from "./Components/BaseHandler";
import EventHandler from "./Components/EventHandler";
import ShadowDOMHandler from "./Components/ShadowDOMHandler";
import StateHandler from "./Components/StateHandler";
import StyleHandler from "./Components/StyleHandler";
import ReactiveElement from "./Classes/ReactiveElement";
import ICustomElement from "./Interfaces/ICustomElement";
import ISetupConfig from "./Interfaces/ISetupConfig";
import IStyleConfig from "./Interfaces/IStyleConfig";
import IComponentOptions from "./Interfaces/IComponentOptions";

const defaultConfig: ISetupConfig = {
  styles: {
  },
  shadowDOM: true,
  animations: {
    setOpacityAnimation: true
  }
}

class ReactiveElementLib {
  public static readonly AnimationHandler = AnimationHandler;
  public static readonly BaseHandler = BaseHandler;
  public static readonly EventHandler = EventHandler;
  public static readonly ShadowDOMHandler = ShadowDOMHandler;
  public static readonly StateHandler = StateHandler;
  public static readonly StyleHandler = StyleHandler;
  public static readonly ReactiveElement = ReactiveElement;
  public static readonly defaultConfig: ISetupConfig = defaultConfig;
}

const DefineComponent = (tagName: string | IComponentOptions, componentClass?: CustomElementConstructor) => {
  if (typeof tagName === "string") {
    window.customElements.define(tagName, componentClass);
  }

  if (tagName["tag"] && tagName["component"]) {
    window.customElements.define(tagName["tag"], tagName["component"]);
  }
};

export {
  BaseHandler,
  StyleHandler,
  ShadowDOMHandler,
  StateHandler,
  AnimationHandler,
  EventHandler,
  ReactiveElement,
  ICustomElement,
  ISetupConfig,
  IStyleConfig,
  IComponentOptions,
  defaultConfig,
  DefineComponent
};

export default ReactiveElementLib;
