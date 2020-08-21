function getLetters() {
  let i = 65;
  const letters = [];
  while (i < 91) {
    letters.push(String.fromCharCode(i));
    i++;
  }
  return letters;
}

function randomChar(letters: string[]) {
  return letters[Math.floor(Math.random() * letters.length)]
}

function randomNumber() {
  return (Math.random() * 100).toFixed(0).toString();
}

export default class RobotName {
  private names = [] as string[];
  private _name = "";
  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.createName();
  }

  constructor() {
    this._name = this.createName();
  }

  public createName(): string {
    let resultName = "";
    for (let i = 0; i <= 1; i++) {
      resultName += randomChar(getLetters());
    }
    let number = randomNumber();
    number = number.length === 3
      ? number
      : +"0" * (4 - number.length) + number;

    resultName += number;
    if (this.names.includes(resultName)) {
      return this.createName();
    }
    this.names.push(resultName);
    return resultName;
  }
}
