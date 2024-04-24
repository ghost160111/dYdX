import { ReactiveElement } from "../../plugins/ReactiveElement/ReactiveElementLib";
import DefineComponent from "../../plugins/ReactiveElement/Decorators/DefineComponent";

interface FetchErrorProps {
  errorMessage: string;
}

@DefineComponent({
  tag: "fetch-error",
  template: /*html*/`
    <h3 class="error-message" ref-data="error-message"></h3>
  `
})
export default class FetchError extends ReactiveElement {
  constructor(props: FetchErrorProps) {
    super({
      shadowDOM: true,
      animations: {
        setOpacityAnimation: true
      },
      styles: {
        css: /*css*/`
          .error-message {
            font-size: 1.5rem;
            line-height: 1.75rem;
          }
        `
      }
    });

    this.data = props;
  }

  public data: {
    errorMessage: string
  };
}
