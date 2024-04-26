export default class FadeTransition {
  constructor(targetNode: Node, duration?: number) {
    this.targetNode = targetNode;

    this.mutationObserverOptions = {
      childList: true,
      subtree: true,
      characterData: true
    }

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

  protected mutationObserver: MutationObserver;
  protected mutationObserverOptions: MutationObserverInit;
  protected targetNode: Node;
  protected keyframes: Keyframe[] | PropertyIndexedKeyframes | null;
  protected options?: number | KeyframeAnimationOptions;

  protected start(): void {
    this.mutationObserver = new MutationObserver((mutations: MutationRecord[]) => {
      for (let i = 0; i < mutations.length; ++i) {
        let mutation = mutations[i];

        for (let j = 0; j < mutation.addedNodes.length; ++j) {
          let addedNode = mutation.addedNodes[j];

          if (addedNode instanceof HTMLElement) {
            addedNode.animate(this.keyframes, this.options);
          }
        }
      }
    });

    this.mutationObserver.observe(this.targetNode, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  public destroy(): void {
    this.mutationObserver.disconnect();
  }
}
