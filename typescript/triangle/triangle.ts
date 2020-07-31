type Shape = 'isosceles' | 'equilateral' | 'scalene';

type MatchingSides = 0 | 2 | 3;

export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  isTriangle(): boolean {
    return this.sides.length === 3 && this.everySideHasLength() && this.isTriangleInequality();
  }

  everySideHasLength(): boolean {
    return this.sides.every((length) => length > 0);
  }

  get matchingSides(): MatchingSides {
    const [a, b, c] = this.sides;
    if (a === b && b === c) return 3;
    if (a === b || b === c) return 2;
    else return 0;
  }

  isTriangleInequality(): boolean {
    const [a, b, c] = this.sides.sort((a, b) => a - b);
    return a + b > c;
  }

  kind(): Shape | undefined {
    if (!this.isTriangle()) {
      throw new Error('This is not a valid triangle.');
    }
    if (this.matchingSides === 3) return 'equilateral';
    else if (this.matchingSides === 2) return 'isosceles';
    else if (this.matchingSides === 0) return 'scalene';
  }
}
