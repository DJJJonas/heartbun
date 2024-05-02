import type { EngineEventName } from "@/types";
import type Engine from ".";
import type Card from "@/interfaces/card";

/**
 * Responsible for propagating events and dispatching events
 */
export default class EventManager {
  private get allCards() {
    return this.engine.players
      .map((p) => [...p.hand, ...p.deck, ...p.minions, p.hero])
      .flat();
  }

  constructor(private engine: Engine) {}

  endTurn() {
    this.engine.turn++;
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
