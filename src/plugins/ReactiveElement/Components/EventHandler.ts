import BaseComponent from "./BaseComponent";
import {
  IEventMapKey,
  IEventMapKeyList
} from "../Interfaces/InterfacesTypes";

type ObjectElement = string | symbol | HTMLElement | Document | Window | ShadowRoot;
type EventMapsObjectElement = keyof HTMLElementEventMap | keyof DocumentEventMap | keyof WindowEventMap | keyof ShadowRootEventMap;
type ObjectElementListenerOptions = boolean | AddEventListenerOptions;

interface AddOrRemoveEventListener {
  addEventListener: string;
  removeEventListener: string;
}

export default class EventHandler extends BaseComponent {
  constructor(context: any) {
    super(context);
  }

  protected eventMapKeyList: IEventMapKeyList[] = [];

  protected checkTypeSetEvent(options: keyof AddOrRemoveEventListener, object: ObjectElement, eventType: EventMapsObjectElement, eventListenerReference: EventListener, eventListenerOptions?: boolean | AddEventListenerOptions): void {
    const checkOptions = (setOrRemoveEventOption: keyof AddOrRemoveEventListener, eventListenerOptions?: ObjectElementListenerOptions): ObjectElementListenerOptions => {
      if (setOrRemoveEventOption === "addEventListener") {
        return eventListenerOptions;
      }
    }

    if (object instanceof HTMLElement || object instanceof Window || object instanceof Document || object instanceof ShadowRoot) {
      object[options](eventType, eventListenerReference, checkOptions(options, eventListenerOptions));
    } else if (typeof object === "string" || typeof object === "symbol") {
      if (this.context.shadowDOM.refs[object] instanceof NodeList) {
        this.context.shadowDOM.refs[object].forEach((node: Node) => {
          node[options](eventType, eventListenerReference, checkOptions(options, eventListenerOptions));
        });
      } else if (this.context.shadowDOM.refs[object] instanceof HTMLElement) {
        this.context.shadowDOM.refs[object][options](eventType, eventListenerReference, checkOptions(options, eventListenerOptions));
      }
    }
  }

  public subscribe(object: ObjectElement, eventType: EventMapsObjectElement, eventListener: EventListener | CallableFunction, eventListenerOptions?: ObjectElementListenerOptions, ...parameters: any[]): EventHandler {
    let eventListenerName = eventListener.name;
    let eventListenerReference: EventListener = eventListener.bind(this.context, ...parameters);
    let eventObjectRefName = object.toString() + "-" + eventListenerName;
    let eventMapKeyOptionsRef: IEventMapKeyList = { eventType, object, parameters, eventListenerName, eventObjectRefName };

    this.context.eventHandlers[eventObjectRefName] = new Map<IEventMapKey, EventListener>();

    this.context.eventHandlers[eventObjectRefName].set(eventMapKeyOptionsRef, eventListenerReference);
    this.eventMapKeyList.push(eventMapKeyOptionsRef);

    this.checkTypeSetEvent("addEventListener", object, eventType, eventListenerReference, eventListenerOptions);

    return this;
  }

  public unsubscribe(object: ObjectElement, eventType: EventMapsObjectElement, eventObjectRefName: string): EventHandler {
    for (const [key, eventListenerRef] of this.context.eventHandlers[eventObjectRefName]) {
      if (object === key["object"] && eventType === key["eventType"]) {
        this.checkTypeSetEvent("removeEventListener", object, eventType, eventListenerRef);
      }
    }

    return this;
  }

  public unsubscribeEvents(): void {
    for (let i = 0; i < this.eventMapKeyList.length; ++i) {
      let eventMapKey = this.eventMapKeyList[i];
      let { object, eventType, eventObjectRefName } = eventMapKey;
      this.unsubscribe(object, eventType, eventObjectRefName);
    }
  }

  public disconnectedCallback(): void {
    this.unsubscribeEvents();
  }
}
