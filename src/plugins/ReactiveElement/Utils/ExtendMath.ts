const clamp = (value: number, min?: number, max?: number): number => {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else if (min <= value && value <= max) {
    return value;
  }
}

// Defining properties and methods
Math["clamp"] = clamp;
