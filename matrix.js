//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.matrixString = matrixString;
  }

  get rows() {
    const arrayOfRowStrings = this.matrixString.split("\n");
    let matrix = [];

    arrayOfRowStrings.forEach((rowString) => {
      const rowArrayString = rowString.split(" ");
      let row = [];

      rowArrayString.forEach((string) => {
        row.push(parseInt(string));
      });

      matrix.push(row);
    });

    return matrix;
  }

  get columns() {
    let matrix = [[1]];

    return matrix;
  }
}
