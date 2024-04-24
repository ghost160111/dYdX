export default class Base {
  constructor() {
    Base.setCount();
  }

  private static count: number = 0;

  private static setCount(): void {
    this.count++;
  }

  public static getCount(): number {
    return this.count;
  }
}
