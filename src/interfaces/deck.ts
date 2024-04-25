import type ICard from "./card";

export default interface Deck {
  cards: Array<ICard>;
  hero: ICard;
}
