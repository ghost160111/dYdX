const DefineComponentDecoratorErrors = {
  twoPlaceTemplateDefinition: "You defined template in @DefineComponent decorator and overriden render method in class, please choose of options, either set template in decorator or override render method!"
};

export interface DefineComponentOptions {
  tag: string;
  template?: string;
  composableObjects?: {}[];
}

const assignComposableObjects = (target: CustomElementConstructor, composableObjects?: {}[]): void => {
  if (composableObjects && composableObjects.length > 0) {
    Object.assign(target.prototype, ...composableObjects);
  }
}

const assignHTMLTemplate = (target: CustomElementConstructor, template?: string): void => {
  if (template && target.prototype.render() !== "") {
    throw DefineComponentDecoratorErrors.twoPlaceTemplateDefinition;
  }
  target.prototype.templateContent = template;
}

const DefineComponent = (options: DefineComponentOptions): CallableFunction => {
  let { tag, template, composableObjects } = options;

  if (!tag) {
    throw "Enter tag name for your custom element!";
  }

  return (target: CustomElementConstructor): void => {
    assignComposableObjects(target, composableObjects);
    assignHTMLTemplate(target, template);

    window.customElements.define(tag, target);
  }
}

export default DefineComponent;
