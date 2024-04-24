import { sharedState } from "../../plugins/ReactiveElement/Classes/ReactiveElement"

export const navigateTo = (url: string, event: MouseEvent) => {
  event.preventDefault();
  sharedState.components["header-navigation"].navigateTo(url);
};

export const getComponent = (componentName: string): HTMLElement => {
  if (!sharedState.components[componentName]) {
    console.warn("There is no component with this ref name: ", componentName);
  }
  return sharedState.components[componentName];
};
