import type { Rarity, HeroClass, MinionTrybe, CardType } from "@/types";

export default interface Card {
  type: CardType;
  name: string;
  cost: number;
  text: string;
  class: HeroClass;

  id?: number; // will be set during gameplay
  portrait?: string; // url
  attack?: number; // some cards don't have attack, e.g. spells
  health?: number; // some cards don't have health, e.g. spells
  maxHealth?: number; // will be set during gameplay
  rarity?: Rarity; // some generated cards (tokens) and base cards don't have rarity
  trybe?: MinionTrybe;

  copy: () => Card; // used for creating copies of this card
}
