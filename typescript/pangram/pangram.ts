export default class Pangram {
  private text: string;

  constructor(props: string) {
    this.text = props
  }

  isPangram(): boolean {
    const regex = /([a-zA-Z])(?!.*\1)/g;

    return (this.text.toUpperCase().match(regex) || '').length == 26
  }
}