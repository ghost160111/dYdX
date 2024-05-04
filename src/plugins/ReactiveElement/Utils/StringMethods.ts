export class StringMethods {
  static setOneLineText(text: string): string {
    if (typeof text === "string") {
      const oneLineText: string = text.replace(/\r/g, "").replace(/\n/g, "");
      return oneLineText;
    }
  }
}
