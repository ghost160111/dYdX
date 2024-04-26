import IStyleConfig from "./IStyleConfig";
import IAnimationOptions from "./IAnimationOptions";

export default interface ISetupConfig {
  styles?: IStyleConfig;
  shadowDOM?: boolean;
  animations?: IAnimationOptions;
  devMode?: boolean;
  setFadeInTransition?: {
    value: boolean;
    duration?: number;
  },
  props?: {}
}
