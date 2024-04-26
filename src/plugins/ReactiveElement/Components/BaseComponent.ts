export const BASE_COMPONENT_ERRORS = {
  emptyContext: "Context is empty, enter this context of your component class!"
}

export default abstract class BaseComponent {
  public context: any;

  constructor(context: any) {
    if (!context) {
      throw BASE_COMPONENT_ERRORS.emptyContext;
    }

    this.context = context;
  }
}
