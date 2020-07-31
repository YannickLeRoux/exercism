type Planet = 'earth' | 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

const orbitalPeriod: Record<Planet, number> = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const EARTH_ORBITAL_PERIOD_SEC = 31557600;

class SpaceAge {
  constructor(public seconds: number) {}

  onEarth(): number {
    return this.getAge('earth');
  }

  onMercury(): number {
    return this.getAge('mercury');
  }

  onVenus(): number {
    return this.getAge('venus');
  }

  onMars(): number {
    return this.getAge('mars');
  }

  onJupiter(): number {
    return this.getAge('jupiter');
  }

  onSaturn(): number {
    return this.getAge('saturn');
  }

  onUranus(): number {
    return this.getAge('uranus');
  }

  onNeptune(): number {
    return this.getAge('neptune');
  }

  getAge(planet: Planet): number {
    return this.round(this.seconds / EARTH_ORBITAL_PERIOD_SEC / orbitalPeriod[planet], { decimals: 2 });
  }

  round(num: number, options: { decimals: number }): number {
    return parseFloat(num.toFixed(options.decimals));
  }
}

export default SpaceAge;
