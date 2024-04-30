import type ICard from "./card";

export default interface Player {
  deck: Array<ICard>;
  hero: ICard;
  hand: Array<ICard>;
  health: number;
  armor: number;
  mana: number;
  maxMana: number;
  maxManaLimit: number;
  minions: Array<ICard>;
}
