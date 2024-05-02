export default class FadeTransition {
  protected mutationObserver: MutationObserver;
  protected mutationObserverOptions: MutationObserverInit;
  protected targetNode: Node;
  protected keyframes: Keyframe[] | PropertyIndexedKeyframes | null;
  protected options?: number | KeyframeAnimationOptions;

  constructor(targetNode: Node, duration?: number) {
    this.targetNode = targetNode;

    this.mutationObserverOptions = {
      childList: true,
      subtree: true,
      characterData: true
    };

    this.keyframes = [
      { opacity: 0 },
      { opacity: 1 }
    ];

    this.options = {
      easing: "ease",
      duration: duration ?? 750
    };

    this.start();
  }

  protected start(): void {
    this.mutationObserver = new MutationObserver(this.observeMutations);
    this.mutationObserver.observe(this.targetNode, this.mutationObserverOptions);
  }

  protected observeMutations = (mutations: MutationRecord[]): void => {
    for (let i = 0; i < mutations.length; ++i) {
      let mutation = mutations[i];

      for (let j = 0; j < mutation.addedNodes.length; ++j) {
        let addedNode = mutation.addedNodes[j];

        if (addedNode instanceof HTMLElement) {
          addedNode.animate(this.keyframes, this.options);
        }
      }
    }
  }

  public destroy(): void {
    this.mutationObserver.disconnect();
  }
}
