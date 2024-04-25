import type Deck from "@/interfaces/deck";
import type Player from "@/interfaces/player";

export function newPlayer(deck: Deck): Player {
  return {
    deck: deck.cards,
    hero: deck.hero,
    hand: [],
    health: 30,
    armor: 0,
    mana: 0,
    maxMana: 0,
    maxManaLimit: 10,
  };
}
