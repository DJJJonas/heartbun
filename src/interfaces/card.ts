import type { Rarity, HeroClass, MinionTrybe, CardType } from "@/types";

export default interface ICard {
  type: CardType;
  name: string;
  cost: number;
  text: string;
  class: HeroClass;

  portrait?: string; // url
  attack?: number;
  health?: number;
  maxHealth?: number;
  rarity?: Rarity;
  trybe?: MinionTrybe;

  copy: () => ICard;
}
