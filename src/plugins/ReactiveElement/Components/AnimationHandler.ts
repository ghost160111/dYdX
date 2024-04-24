import BaseComponent from "./BaseComponent";

type AnimationKeyframes = Keyframe[] | PropertyIndexedKeyframes;
type AnimationKeyframeOptions = number | KeyframeAnimationOptions;

export default class AnimationHandler extends BaseComponent {
  constructor(context: any) {
    super(context);
  }

  protected keyframes: AnimationKeyframes;
  protected animOptions: AnimationKeyframeOptions;

  public setFadeAnimation(duration?: number): void {
    this.keyframes = [
      { opacity: 0 },
      { opacity: 1 }
    ]

    this.animOptions = {
      duration: duration ?? 500
    }

    this.context.animate(this.keyframes, this.animOptions);
  }

  public animate(keyframes: AnimationKeyframes, animationOptions: AnimationKeyframeOptions): void {
    this.context.animate(keyframes, animationOptions);
  }
}
