export class List {
  constructor(initValues) {
    this.values = initValues || [];
  }

  append(newList) {
    return new List([...this.values, ...newList.values]);
  }

  concat(newList) {
    const values = newList.foldl(
      (accumulator, newList) => [...accumulator, ...newList.values],
      []
    );
    return new List([...this.values, ...values]);
  }

  filter(callback) {
    const values = this.foldl(
      (accumulator, value) =>
        callback(value) ? [...accumulator, value] : accumulator,
      []
    );
    return new List(values);
  }

  map(callback) {
    const values = this.foldl(
      (accumulator, value) => [...accumulator, callback(value)],
      []
    );
    return new List(values);
  }

  length() {
    return this.foldl(accumulator => ++accumulator, 0);
  }

  foldl(callback, accumulator) {
    for (let value of this.values) {
      accumulator = callback(accumulator, value);
    }
    return accumulator;
  }

  foldr(callback, accumulator) {
    return this.reverse().foldl(callback, accumulator);
  }

  reverse() {
    const values = this.foldl(
      (accumulator, value) => [value, ...accumulator],
      []
    );
    return new List(values);
  }
}
