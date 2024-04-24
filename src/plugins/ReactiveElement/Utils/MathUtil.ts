export default class MathUtil {
  public static add(...numbers: number[]): number {
    let sum: number = 0;

    for (let i: number = 0; i < numbers.length; ++i) {
      let number = numbers[i];
      sum += number;
    }

    return sum;
  }

  public static less(...numbers: number[]): number {
    let lessResult: number = 0;

    for (let i: number = 0; i < numbers.length; ++i) {
      let number = numbers[i];
      lessResult -= number;
    }

    return lessResult;
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
