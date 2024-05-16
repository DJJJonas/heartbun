import type Card from "@/interfaces/card";
import type Deck from "@/interfaces/deck";
import type { EngineMessage } from "@/interfaces/engine_message";
import type Player from "@/interfaces/player";
import { drawCard, removeCardId, shuffle, shuffleCard } from "@/util";
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
  messageHandler: (msg: EngineMessage) => void = this.mulliganMessageHandler;

  playerMulligated: Array<boolean> = [false, false];

  get turnPlayer() {
    return this.players[this.turnPlayerIndex];
  }

  get opponentPlayer() {
    return this.players[Math.abs(this.turnPlayerIndex - 1)];
  }

  constructor(deck1: Deck, deck2: Deck) {
    this.players = [newPlayer(deck1), newPlayer(deck2)];
    this.players.forEach((p) => {
      this.setCardDefaults(p.hero);
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
    if (!msg) throw new Error("undefined message");
    if (msg.player === undefined) throw new Error("undefined player");
    this.messageHandler(msg);
  }

  /**
   * # Mulligan Handler
   * ## Case scenarios
   * _\*player sends the ids of cards to mulligate\*_
   *  - Player mulligated -> ignore
   *  - Player didn't mulligated -> Player now ready
   *    - If both players are ready -> Message Handler goes to `normalMessageHandler`
   */
  private mulliganMessageHandler(msg: EngineMessage) {
    const pIndex = msg.player!;
    const playerMulligated = this.playerMulligated[pIndex];
    const playersMulligated = () =>
      !this.playerMulligated.some((r) => r === false);
    const setPlayerMulligated = (r: boolean) =>
      (this.playerMulligated[pIndex] = r);

    if (playerMulligated) return;
    else {
      setPlayerMulligated(true);
      if (playersMulligated()) {
        this.messageHandler = this.normalMessageHandler; // 👀 if this causes errors: try `.bind(this)`
        this.eventManager.addMaxMana(this.turnPlayer);
        this.eventManager.refreshMana(this.turnPlayer);
      }
    }
  }

  private normalMessageHandler(msg: EngineMessage) {
    if (this.turnPlayerIndex !== msg.player) return;
    const player = this.turnPlayer;
    const opponent = this.opponentPlayer;

    switch (msg.action) {
      // case "free":
      case "play":
        if (!msg.ids?.length || !msg.ids[0]) return;
        this.eventManager.play(this.turnPlayer, msg.ids[0]);
        break;

      case "attack":
        if (msg.ids === undefined || msg.ids.length !== 2) return;
        if (msg.ids[0] && msg.ids[1])
          this.eventManager.attack(msg.ids[0], msg.ids[1]);
        else return;
        break;

      case "endturn":
        this.eventManager.endTurn();
        break;

      default:
        throw new Error("TODO");
      //
    }
  }

  private mulligate(player: Player, ids: number[]) {
    ids.forEach((id) => {
      const card = removeCardId(player.hand, id)!;
      shuffleCard(card, player.deck);
    });
    for (const _ of ids) {
      const card = drawCard(player.deck);
      if (!card) break;
      player.hand.push(card);
    }
  }

  private forceWinner(player: number) {
    throw new Error("TODO");
  }

  private setCardDefaults(card: Card) {
    card.id = ++this.globalID;
    card.maxHealth = card.health;
  }
}
