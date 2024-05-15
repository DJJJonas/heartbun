import type Card from "./card";

export default interface Player {
  deck: Array<Card>;
  hero: Card;
  hand: Array<Card>;
  armor: number;
  mana: number;
  maxMana: number;
  maxManaLimit: number;
  minions: Array<Card>;
}
