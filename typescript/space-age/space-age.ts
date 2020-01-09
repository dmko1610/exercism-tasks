const EARTH_TO_OTHER_PLANETS: any = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const EARTH_SECONDS: number = 31557600;

export default class SpaceAge {
  private age: number;
  constructor(seconds: number) {
    this.age = seconds;
  }
  get seconds() {
    return this.age;
  }

  getAge = (planet: string) => parseFloat(((this.age / EARTH_SECONDS) / EARTH_TO_OTHER_PLANETS[planet]).toFixed(2));

  onMercury() {
    return this.getAge('mercury');
  }

  onEarth() {
    return parseFloat((this.age / EARTH_SECONDS).toFixed(2));
  }

  onMars() {
    return this.getAge('mars');
  }

  onVenus() {
    return this.getAge('venus');
  }

  onSaturn() {
    return this.getAge('saturn');
  }

  onJupiter() {
    return this.getAge('jupiter');
  }

  onUranus() {
    return this.getAge('uranus');
  }

  onNeptune() {
    return this.getAge('neptune');
  }

}