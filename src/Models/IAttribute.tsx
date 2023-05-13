export interface Ability {
  name: string;
}

export interface Score {
  score: number;
}

export interface Modifier {
  modifier: number;
}

export class HeroAbility implements Ability, Score, Modifier {
  name: string;
  score: number;

  get modifier() {
    return (this.score - 10) / 2;
  }

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
}

export interface IHeroAbilities {
  all: (Ability & Score & Ability)[];
}

export interface Character {
  name: string;

  abilities: (Ability & Score & Modifier)[];
}

function createCharacter(): Character {
  return {
    name: "Hello",
    abilities: [new HeroAbility("Hello", 12)],
  };
}
