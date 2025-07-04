
export interface RezeroCharacter {
   name: string;
 seasons: SeasonData[];
 imageUrl: string;
}
export interface Ability {
  name: string;
}

export interface Faction {
  name: string;
}

export interface Season {
  title: string;
}
export interface SeasonData {
  seasonTitle: string;
  ability: Ability;
  faction: Faction;
  imageUrl: string;
}
