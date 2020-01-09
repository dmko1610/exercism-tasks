const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present")
    }
  }

  getColorNumber = (color: string) => COLORS.indexOf(color);

  value = (): number => this.getColorNumber(this.colors[0]) * 10 + this.getColorNumber(this.colors[1]);

}

