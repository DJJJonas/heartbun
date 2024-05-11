import type Card from "@/interfaces/card";
import type Deck from "@/interfaces/deck";
import type { EngineMessage } from "@/interfaces/engine_message";
import type Player from "@/interfaces/player";
import { drawCard, removeCard, shuffle, shuffleCard } from "@/util";
import EventManager from "./event_manager";
import { newPlayer } from "./util";

export default class Engine {
  players: Array<Player>;
  turnPlayerIndex = 0;
  turn = 0;
  globalID = 0;
  eventManager = new EventManager(this);
  player1Messages: Array<EngineMessage> = [];
  player2Messages: Array<EngineMessage> = [];

  isPlayerReady: Array<boolean> = [false, false];

  get turnPlayer() {
    return this.players[this.turnPlayerIndex];
  }

  constructor(deck1: Deck, deck2: Deck) {
    this.players = [newPlayer(deck1), newPlayer(deck2)];
    this.players.forEach((p) => {
      // this.setCardDefaults(p.hero); //! TEMPORARY WHILE HEROS ARE NOT IMPLEMENTED
      p.deck.forEach((c) => this.setCardDefaults(c));
    });
  }

  start() {
    /** Shuffle decks and send mulligan request */

    const [p1, p2] = this.players;
    shuffle(p1.deck);
    shuffle(p2.deck);

    for (let i = 0; i < 3; i++) {
      const card = drawCard(p1.deck);
      if (!card) break;
      p1.hand.push(card);
    }

    for (let i = 0; i < 4; i++) {
      const card = drawCard(p2.deck);
      if (!card) break;
      p2.hand.push(card);
    }

    this.player1Messages.push({
      type: "request",
      action: "mulligan",
    });

    this.player2Messages.push({
      type: "request",
      action: "mulligan",
    });
  }

  send(msg: EngineMessage) {
    // TODO: action: "endturn"
    // TODO: action: "play" -> play card from hand
    // TODO: action: "attack" -> make attack id0 attack id1
    if (!msg) throw new Error("undefined message");
    if (msg.player === undefined) throw new Error("undefined player");
    const player = this.players[msg.player];
    const playerIsNotReady = !this.isPlayerReady[msg.player];
    const playersAreNotReady = !this.isPlayerReady.some((ready) => ready);

    if (playerIsNotReady && msg.action === "mulligan") {
      if (typeof msg.ids !== "object" || msg.ids === null)
        throw new Error("undefined ids");
      this.mulligan(player, msg.ids);
      this.isPlayerReady[msg.player] = true;
      if (playersAreNotReady) return;
      else {
        this.eventManager.endTurn();
      }
    } else if (playersAreNotReady) {
      throw new Error("players needs to mulligan first");
    }

    switch (msg.action) {
      // case "free":
      // case "play":
      // case "attack":
      // case "endturn":
      default:
        throw new Error("TODO");
      //
    }
  }

  private mulligan(player: Player, ids: number[]) {
    ids.forEach((id) => {
      const card = removeCard(player.hand, id)!;
      shuffleCard(player.deck, card);
    });
    for (const _ of ids) {
      const card = drawCard(player.deck);
      if (!card) break;
      player.hand.push(card);
    }
    this.eventManager.triggerEventOn("mulligan", this.eventManager.allCards);
  }

  private forceWinner(player: number) {
    throw new Error("TODO");
  }

  private setCardDefaults(card: Card) {
    card.id = ++this.globalID;
    card.maxHealth = card.health;
  }
}
