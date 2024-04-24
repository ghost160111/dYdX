import IEventMapKey from "./IEventMapKey";

export default interface IEventMapKeyList extends IEventMapKey {
  eventListenerName: string;
  eventObjectRefName: string;
};
