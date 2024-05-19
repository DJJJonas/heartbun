import type { EventContext } from "@/interfaces/event_context";
import type Player from "@/interfaces/player";
import type { EngineEventName } from "@/types";
import { removeCardId } from "@/util";
import type Engine from ".";

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
    const player = this.engine.turnPlayer;
    this.engine.turn++;
    const source = player.hero;
    this.engine.turnPlayerIndex = Number(!this.engine.turnPlayerIndex);
    this.trigger("endOfTurn", { source });

    this.addMaxMana(player);
    this.refreshMana(player);
    this.trigger("manaGain", { source });
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

  addMaxMana(player: Player) {
    if (player.maxMana <= player.maxManaLimit) {
      player.maxMana++;
    }
  }

  refreshMana(player: Player) {
    player.mana = player.maxMana;
  }

  // TODO replace function signature to `attack{ctx: EventContext}`, and rename EventContext to Context
  attack(sourceId: number, targetId: number) {
    const player = this.engine.turnPlayer;
    const opponent = this.engine.opponentPlayer;
    const source = removeCardId([...player.minions, player.hero], sourceId);
    const target = removeCardId([...opponent.minions, opponent.hero], targetId);
    if (!source || !target) return;
    source.health! -= target.attack!;
    target.health! -= source.attack!;
    // TODO beforeAttack
    const damageDealt = source.attack;
    this.trigger("attack", { source: source, damageDealt });
    // TODO "attacked" && "beforeAttacked" event ?
  }

  // TODO these functions
  dealDamage(ctx: EventContext) {}
  destroy(ctx: EventContext) {}
}
