export default abstract class BaseComponent {
  public context: any;

  constructor(context: any) {
    if (!context) {
      throw "Context is empty, enter this context of your component class!";
    }

    this.context = context;
  }
}
