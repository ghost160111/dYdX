import FadeTransition from "../Classes/FadeTransition";
import { ReactiveElement } from "../ReactiveElementLib";

export const REACTIVE_APP_ERRORS = {
  rootElementNotFound: "Root element wasn't found, it is null. Either it doesn't exist, nor it does exist, but there is inaccurate invocation in callstack.",
  isNotInstanceOfReactiveElement: "Component is not an instance of ReactiveElement!"
}

export interface ComponentsOptions {
  instance: ReactiveElement;
  setFadeTransition?: {
    value: boolean,
    duration?: number;
  }
}

export default class ReactiveApp {
  protected root: HTMLElement | null;
  public components: Record<string, ComponentsOptions>;

  constructor(root: HTMLElement | null, components: Record<string, ComponentsOptions>) {
    this.root = root;

    if (!root) {
      throw Error(REACTIVE_APP_ERRORS.rootElementNotFound);
    }

    for (const [key, component] of Object.entries(components)) {
      if (!(component.instance instanceof ReactiveElement)) {
        throw TypeError(REACTIVE_APP_ERRORS.isNotInstanceOfReactiveElement);
      }
    }

    this.components = components;
  }

  public render(): void {
    for (const [key, component] of Object.entries(this.components)) {
      const { instance, setFadeTransition } = component;

      if (instance instanceof ReactiveElement) {
        this.root.appendChild(instance);

        if (setFadeTransition && setFadeTransition.value) {
          this.setFadeTransition(instance, setFadeTransition.duration);
        }
      }
    }
  }

  public setFadeTransition(component: ReactiveElement, duration?: number): void {
    new FadeTransition(component.$root, duration);
  }
}
