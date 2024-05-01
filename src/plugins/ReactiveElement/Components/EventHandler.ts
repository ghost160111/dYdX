import BaseComponent from "./BaseComponent";

export type ObjectElement = string | symbol | HTMLElement | Document | Window | ShadowRoot;
export type EventMapsObjectElement = keyof HTMLElementEventMap | keyof DocumentEventMap | keyof WindowEventMap | keyof ShadowRootEventMap;
export type ObjectElementListenerOptions = boolean | AddEventListenerOptions;

export interface AddOrRemoveEventListener {
  addEventListener: string;
  removeEventListener: string;
}

export type EventProperties = {
  object: ObjectElement;
  eventType: EventMapsObjectElement;
  eventListenerRef: EventListener;
  eventListenerOptions?: ObjectElementListenerOptions;
  parameters?: any[];
}

export default class EventHandler extends BaseComponent {
  constructor(context: any) {
    super(context);

    this.eventMapList = new Map<string, EventProperties>();
  }

  public eventMapList: Map<string, EventProperties>;

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

  public subscribe(object: ObjectElement, id: string, eventType: EventMapsObjectElement, eventListener: Function, eventListenerOptions?: ObjectElementListenerOptions, ...parameters: any[]): void {
    let eventListenerRef: EventListener = eventListener.bind(this.context, ...parameters);

    if (this.eventMapList.get(id)) {
      console.warn(`The id '${id}' is already assigned for event: ${this.eventMapList.get(id)}`);
    }

    this.eventMapList.set(id, { object, eventType, eventListenerRef, eventListenerOptions, parameters });
    this.checkTypeSetEvent("addEventListener", object, eventType, eventListenerRef, eventListenerOptions);

    Object.defineProperty(this.context.eventHandlers, id, {
      enumerable: true,
      writable: true,
      configurable: true,
      value: { object, eventType, eventListenerRef, eventListenerOptions, parameters }
    });
  }

  public unsubscribe(id: string): void {
    for (const [eventId, eventProperties] of this.eventMapList.entries()) {
      if (eventId === id) {
        const { object, eventType, eventListenerRef, eventListenerOptions } = eventProperties;

        this.checkTypeSetEvent("removeEventListener", object, eventType, eventListenerRef, eventListenerOptions);

        if (this.context.eventHandlers[id]) {
          delete this.context.eventHandlers[id];
        }
      }
    }
  }

  public unsubscribeEvents(): void {
    for (const [eventId] of this.eventMapList.entries()) {
      this.unsubscribe(eventId);
    }
  }

  public disconnectedCallback(): void {
    this.unsubscribeEvents();
  }
}
