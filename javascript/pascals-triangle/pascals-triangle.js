export class Triangle {
    constructor(input) {
        this.resultArray = [];
        for (let i = 0; i < input; i++) {
            this.resultArray[i] = [];
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    this.resultArray[i][j] = 1;
                    continue;
                }
                this.resultArray[i][j] = this.resultArray[i - 1][j] + this.resultArray[i - 1][j - 1]
            }
        }
    }

    get lastRow() {
        return this.resultArray[this.resultArray.length - 1]
    }

    get rows() {
        return this.resultArray
    }
}
