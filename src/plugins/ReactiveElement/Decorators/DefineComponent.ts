export interface DefineComponentOptions {
  tag: string;
  template?: string;
  composableObjects?: {}[];
}

const DefineComponent = (options: DefineComponentOptions): CallableFunction => {
  let { tag, template, composableObjects } = options;

  if (!tag) {
    throw "Enter tag name for your custom element!";
  }

  return (target: CustomElementConstructor): void => {
    if (composableObjects && composableObjects.length > 0) {
      Object.assign(target.prototype, ...composableObjects);
    }

    if (template && target.prototype.render() !== "") {
      throw "You defined template in @DefineComponent decorator and overriden render method in class, please choose of options, either set template in decorator or override render method!"
    }
    target.prototype.templateContent = template;

    window.customElements.define(tag, target);
  }
}

export default DefineComponent;
