import type { EngineEventName } from "@/types";
import type Engine from ".";
import type Card from "@/interfaces/card";
import type Player from "@/interfaces/player";
import type { EventContext } from "@/interfaces/event_context";

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

  startOfGame() {
    this.allCards.forEach((source) => {
      this.trigger("startOfGame", { source });
    });
  }

  // plays card from player's hand and returns if the action was completed
  play(player: Player, id: number) {
    const cardIndex = player.hand.findIndex((c) => c.id === id);
    if (cardIndex < 0) return false;
    // remove card from hand
    const source = player.hand.splice(cardIndex, 1)[0];
    // place card on board
    player.minions.push(source);
    // TODO trigger "minionSpawn" event
    this.trigger("battlecry", { source });

    return true;
  }

  endTurn() {
    this.engine.turn++;
    const source = this.engine.turnPlayer.hero;
    this.trigger("endOfTurn", { source });
    this.engine.turnPlayerIndex = Number(!this.engine.turnPlayerIndex);
    // TODO gain mana crystal event
  }

  trigger(eventName: EngineEventName, context: EventContext) {
    this.allCards.forEach((c) => {
      const enchants = [c.defaultEnchantments, c.enchantments].flat();
      enchants.forEach((enc) => {
        const evs = enc?.events.get(eventName);
        evs?.forEach((ev) => ev(context, this));
      });
    });
  }
}
