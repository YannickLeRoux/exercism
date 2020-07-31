class CollatzConjecture {
  static steps(n: number): number {
    if (n < 1) {
      throw new Error('Only positive numbers are allowed');
    }
    let count = 0;
    while (n > 1) {
      if (this.isEven(n)) {
        n = n / 2;
      } else if (this.isOdd(n)) {
        n = 3 * n + 1;
      }
      count++;
    }
    return count;
  }

  static isEven(n: number): boolean {
    return n % 2 == 0;
  }

  static isOdd(n: number): boolean {
    return !this.isEven(n);
  }
}

export default CollatzConjecture;
