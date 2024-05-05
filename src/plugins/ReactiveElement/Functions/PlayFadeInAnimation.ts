import { ReactiveElement } from "../ReactiveElementLib";
import animate from "../Utils/Animate";

export const PlayFadeInAnimation = (targetNode: HTMLElement | ReactiveElement): void => {
  animate({
    node: targetNode,
    keyframes: [
      { opacity: 0 },
      { opacity: 1 }
    ],
    options: {
      easing: "ease",
      duration: 1000
    }
  });
}
