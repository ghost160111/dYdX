export default interface IEventMapKey {
  eventType: keyof HTMLElementEventMap | keyof DocumentEventMap | keyof WindowEventMap | keyof ShadowRootEventMap;
  object: string | symbol | Window | Document | ShadowRoot | HTMLElement;
  parameters: any[]
};
