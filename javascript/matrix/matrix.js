export class Matrix {
    constructor(props) {
        this.numbers = props
    }

    get rows() {
        return this.getRows()
    }

    get columns() {
        const rows = this.getRows();
        const cols = [];
        rows.map(columnElement => {
            columnElement.forEach((element, index) => {
                if (!Array.isArray(cols[index])) {
                    cols[index] = []
                }
                cols[index].push(element)
            })

        });
        return cols
    }

    getRows() {
        let stringNumbers = this.numbers.split('\n');
        return stringNumbers.map(element => {
            return element.split(' ').map(el => +el)
        })
    }
}