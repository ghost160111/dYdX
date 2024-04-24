import { sharedState } from "../../../plugins/ReactiveElement/Classes/ReactiveElement";

export const GetComponent = async (componentName: string): Promise<CustomElementConstructor> => {
  return await new Promise((resolve: (value: CustomElementConstructor | PromiseLike<CustomElementConstructor>) => void, reject: (reason?: any) => void): void => {
    setTimeout(() => {
      if (!sharedState.components[componentName]) {
        reject(`There is no component with this name: ${componentName}`);
      } else {
        resolve(sharedState.components[componentName]);
      }
    });
  });
}

