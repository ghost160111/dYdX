interface AnimateProps {
  node: HTMLElement | null;
  keyframes: Keyframe[] | PropertyIndexedKeyframes | null;
  options?: number | KeyframeAnimationOptions;
}

/**
 * @description
 * Animates HTML elements and its children.
 */
const animate = (config: AnimateProps): void => {
  const { node, keyframes, options } = config;

  if (!node) {
    throw "Node is null, check callstack and existance of your node!";
  }

  node.animate(keyframes, options);
}

export default animate;
