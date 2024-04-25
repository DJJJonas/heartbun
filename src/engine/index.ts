import type ICard from "@/interfaces/card";
import { newPlayer } from "./util";
import type Deck from "@/interfaces/deck";
import type Player from "@/interfaces/player";

export default class Engine {
  players: Array<Player>;
  currentPlayer = 0;
  globalID = 0;
  constructor(deck1: Deck, deck2: Deck) {
    this.players = [newPlayer(deck1), newPlayer(deck2)];
  }

  start(): [Array<ICard>, Array<ICard>] {
    throw new Error("TODO");
  }

  mulligan(p1ids: number[], p2ids: number[]) {
    throw new Error("TODO");
  }

  playCard(id: number) {
    throw new Error("TODO");
  }
  endTurn() {
    throw new Error("TODO");
  }
  setWinner(player: number) {
    throw new Error("TODO");
  }

  private setCardDefaults(card: ICard) {
    card.id = ++this.globalID;
    card.maxHealth = card.health;
  }
}
