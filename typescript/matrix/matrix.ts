class Matrix {
  constructor(public rawMatrix: string) {}

  get rows(): number[][] {
    return this.rowsOfIntFromString(this.rawMatrix);
  }

  get columns(): number[][] {
    return this.transpose(this.rows);
  }

  private rowsOfIntFromString(s: string): number[][] {
    return s.split('\n').map((str) => str.split(' ').map((str) => parseInt(str)));
  }

  private transpose(matrix: number[][]): number[][] {
    return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
  }
}

export default Matrix;
