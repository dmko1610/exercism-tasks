export class LinkedList {
  constructor() {
    this.resultList = [];
  }
  push(value) {
    this.resultList.push(value);
  }

  pop() {
    return this.resultList.pop();
  }

  shift() {
    return this.resultList.shift();
  }

  unshift(value) {
    this.resultList.unshift(value);
  }

  delete(value) {
    if (this.resultList.indexOf(value) >= 0) {
      this.resultList.splice(this.resultList.indexOf(value), 1);
    }
  }

  count() {
    return this.resultList.length;
  }
}
