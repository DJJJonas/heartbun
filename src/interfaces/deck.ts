import type Card from "./card";

export default interface Deck {
  cards: Array<Card>;
  hero: Card;
}
