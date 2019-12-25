export default class Robot {
  constructor() {
    this._name = createName();
  }

  reset() {
    this._name = createName();
  }

  get name() {
    return this._name;
  }

  set name(value) {
    throw new Error("You cannot change the name, kiddo.");
  }
}

let namesList = [];

function createName() {
  const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let result = "";

  const randomChar = value => value[Math.floor(Math.random() * value.length)];

  for (let i = 0; i <= 1; i++) {
    result += randomChar(letters);
  }

  let number = (Math.random() * 100).toFixed(0).toString();
  number = number.length === 3 ? number : "0" * (4 - number.length) + number;
  result += number;
  if (namesList.includes(result)) {
    return createName();
  }
  namesList.push(result);
  return result;
}
