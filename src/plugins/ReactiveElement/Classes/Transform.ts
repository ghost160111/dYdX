export default class Transform2D {
  protected x: number;
  protected y: number;

  constructor(node?: HTMLElement, x?: number, y?: number) {
    if (node && x && y) {
      this.translate(node, x, y);
    }
  }

  public translate(node: HTMLElement, x: number, y: number): void {
    this.x = x;
    this.y = y;
    Transform2D.translate(node, x, y);
  }

  public static translate(node: HTMLElement, x: number, y: number): void {
    node.style.transform = `translate(${x / 16}rem, ${y ?? 1 / 16}rem)`;
  }
}
