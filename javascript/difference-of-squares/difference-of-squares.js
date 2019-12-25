export class Squares {
  constructor(value) {
    this._square = value;
  }

  get sumOfSquares() {
    let result = 0;
    for (let i = 1; i <= this._square; i++) {
      result += Math.pow(i, 2);
    }
    return result;
  }

  get squareOfSum() {
    let result = 0;
    for (let i = 1; i <= this._square; i++) {
      result += i;
    }
    return Math.pow(result, 2);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
