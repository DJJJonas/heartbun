import type Card from "@/interfaces/card";
import type { EngineMessage } from "@/interfaces/engine_message";
import type Player from "@/interfaces/player";
import { drawCard, removeCardId, shuffle, shuffleCard } from "@/util";
import EventManager from "./event_manager";
import type { AttackContext } from "./interfaces";
import { hasAttackAndHealth, newPlayer } from "./util";

export default class Engine {
  players: Array<Player>;
  turnPlayerIndex = 0;
  turn = 0;
  globalID = 0;
  eventManager = new EventManager(this);
  messageHandler: (msg: EngineMessage) => void = this.mulliganMessageHandler;

  playerMulligated: Array<boolean> = [false, false];

  get turnPlayer() {
    return this.players[this.turnPlayerIndex];
  }

  get opponentPlayer() {
    return this.players[Math.abs(this.turnPlayerIndex - 1)];
  }

  constructor(deck1: Array<Card>, deck2: Array<Card>) {
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

    p1.messageChannel({
      type: "request",
      action: "mulligan",
    });

    p2.messageChannel({
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
    const player = this.players[pIndex];
    const playerMulligated = this.playerMulligated[pIndex];
    const playersMulligated = () =>
      !this.playerMulligated.some((r) => r === false);
    const setPlayerMulligated = (r: boolean) =>
      (this.playerMulligated[pIndex] = r);

    if (playerMulligated) return;
    else {
      if (!msg.ids) return;
      this.mulligate(player, msg.ids);
      setPlayerMulligated(true);
      if (playersMulligated()) {
        this.messageHandler = this.normalMessageHandler; // 👀 if this causes errors: try `.bind(this)`
        const player = this.turnPlayer;
        const source = player.hero;
        this.eventManager.addMaxMana({ player, source });
        this.eventManager.refreshMana({ player, source });
      }
    }
  }

  private popCardFrom(player: Player, id?: number) {
    if (id === undefined) return undefined;
    return removeCardId(this.eventManager.allCardsFrom(player), id);
  }

  private normalMessageHandler(msg: EngineMessage) {
    if (this.turnPlayerIndex !== msg.player) return;
    const player = this.turnPlayer;
    const source = this.popCardFrom(player, msg.sourceId);
    const target = this.popCardFrom(player, msg.targetId);

    switch (msg.action) {
      // case "free":
      case "play":
        if (source) {
          this.casePlay(player, source);
        }
        break;

      case "attack":
        if (source && target) {
          this.caseAttack(player, source, target);
        }
        break;

      case "endturn":
        this.caseEndTurn();
        break;

      default:
        throw new Error("TODO");
      //
    }
  }

  private casePlay(player: Player, source: Card) {
    this.eventManager.play({ player, source });
  }

  private caseAttack(player: Player, source: Card, target: Card) {
    if (hasAttackAndHealth(source) && hasAttackAndHealth(target)) {
      this.eventManager.attack({ player, source, target } as AttackContext);
    }
  }

  private caseEndTurn() {
    this.eventManager.endTurn();
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
