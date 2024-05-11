import type { EngineEventName } from "@/types";
import type Engine from ".";
import type Card from "@/interfaces/card";
import type Player from "@/interfaces/player";

/**
 * Responsible for propagating events and dispatching events
 */
export default class EventManager {
  get allCards() {
    return this.engine.players
      .map((p) => [...p.hand, ...p.deck, ...p.minions]) // TODO: add p.hero after impl heroes
      .flat();
  }

  constructor(private engine: Engine) {}

  // plays card from player's hand and returns if the action was completed
  play(player: Player, id: number) {
    const cardIndex = player.hand.findIndex((c) => c.id === id);
    if (cardIndex < 0) return false;
    // remove card from hand
    const card = player.hand.splice(cardIndex, 1)[0];
    // place card on board
    player.minions.push(card);
    this.triggerEventOn("battlecry", [card]);
    // trigger "minionSpawn" event

    return true;
  }

  endTurn() {
    this.engine.turn++;
    this.triggerEventOn("endOfTurn", this.allCards);
    this.engine.turnPlayerIndex = Number(!this.engine.turnPlayerIndex);
    // TODO gain mana crystal event
  }

  triggerEventOn(eventName: EngineEventName, cards: Array<Card>) {
    cards.forEach((c) => {
      const enchants = [c.defaultEnchantments, c.enchantments].flat();
      enchants.forEach((enc) => {
        const evs = enc?.events.get(eventName);
        evs?.forEach((ev) =>
          ev(
            {
              source: c,
              targets: [],
              damageDealt: 0,
              damageTaken: 0,
              damageHealed: 0,
            },
            this
          )
        );
      });
    });
  }

  startOfGame() {
    this.triggerEventOn("startOfGame", this.allCards);
  }
}
