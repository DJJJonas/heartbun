import type Card from "@/interfaces/card";
import type Deck from "@/interfaces/deck";
import type Player from "@/interfaces/player";

export function newPlayer(deck: Deck): Player {
  return {
    deck: deck.cards,
    hero: deck.hero,
    hand: [],
    armor: 0,
    mana: 0,
    maxMana: 0,
    maxManaLimit: 10,
    minions: [],
    messageChannel(_) {},
  };
}

export function hasAttackAndHealth(card: Card) {
  return card.attack !== undefined && card.health !== undefined;
}
