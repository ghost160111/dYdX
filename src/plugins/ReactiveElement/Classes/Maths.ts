export default class Maths {
  public static add(...numbers: number[]): number {
    let sum: number = 0;

    for (let i: number = 0; i < numbers.length; ++i) {
      let number = numbers[i];
      sum += number;
    }

    return sum;
  }

  public static less(...numbers: number[]): number {
    let result: number = 0;

    for (let i: number = 0; i < numbers.length; ++i) {
      let number = numbers[i];
      result += number;
    }

    return result;
  }

  public static random(max: number): number {
    let randomNumber: number = Math.floor(Math.random() * max);
    return randomNumber;
  }

  public static clamp(value: number, min?: number, max?: number) {
    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    } else if (min <= value && value <= max) {
      return value;
    }
  }
}
