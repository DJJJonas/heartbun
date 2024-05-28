import type Card from "@/interfaces/card";
import type Player from "@/interfaces/player";

export function newPlayer(deck: Array<Card>): Player {
  if (deck.length !== 31) throw new Error("deck is incomplete");

  return {
    hero: deck.shift()!,
    deck: deck,
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
