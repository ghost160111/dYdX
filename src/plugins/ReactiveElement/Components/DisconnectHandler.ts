import BaseComponent from "./BaseComponent";

export default class DisconnectHandler extends BaseComponent {
  constructor(context: any) {
    super(context);
  }

  public destroy(): void {
    this.destroyEvents();
    this.destroyAnimationHandler();
    this.destroyEventHandler();
    this.destroyStyles();
    this.destroyShadowDOM();
    this.destroyStateHandler();
    this.destroyFadeTransition();

    this.context.base = null;

    if (this.context.devMode) {
      this.logDestroyedObjects();
    }
  }

  protected destroyEvents(): void {
    if (this.context.cleanUp) {
      this.context.cleanUp();
    }
  }

  protected destroyStyles(): void {
    if (this.context.styles) {
      this.context.styles.disconnectedCallback();
      this.context.styles = null;
    }
  }

  protected destroyShadowDOM(): void {
    if (this.context.shadowDOM) {
      this.context.shadowDOM.disconnectedCallback();
    }
  }

  protected destroyStateHandler(): void {
    if (this.context.stateHandler) {
      this.context.stateHandler.disconnectedCallback();
    }
  }

  protected destroyAnimationHandler(): void {
    if (this.context.animationHandler) {
      this.context.animationHandler = null;
    }
  }

  protected destroyEventHandler(): void {
    if (this.context.eventHandler) {
      this.context.eventHandler.disconnectedCallback();
      this.context.eventHandler = null;
    }

    this.context.eventHandlers = {};
  }

  protected destroyFadeTransition(): void {
    if (this.context.fadeTransition) {
      this.context.fadeTransition.destroy();
      this.context.fadeTransition = null;
    }
  }

  public logDestroyedObjects(): void {
    console.log("Emptied base component instance: ", this.context.base);
    console.log("Emptied styles component instance: ", this.context.styles);
    console.log("Emptied stylesheet component instance: ", this.context.stylesheet);
    console.log("Emptied shadowDOM component instance: ", this.context.shadowDOM);
    console.log("Emptied eventHandlers component instance: ", this.context.eventHandlers);
    console.log("Emptied stateHandler instance: ", this.context.stateHandler);
    console.log("Emptied animationHandler instance: ", this.context.animationHandler);
    console.log("Emptied eventHandler instance: ", this.context.eventHandler);
    console.log("Emptied fadeTransition instance: ", this.context.fadeTransition);
    console.log("Destroyed object with ID: ", this.context.componentID);
  }
}
