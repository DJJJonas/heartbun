import type { Context } from "@/interfaces/event_context";
import type Player from "@/interfaces/player";
import type { EngineEventName } from "@/types";
import type Engine from ".";
import type { AttackContext, DealDamageContext } from "./interfaces";
import heros from "@/collection/heros";

/**
 * Responsible for propagating events and dispatching events
 */
export default class EventManager {
  get allCards() {
    return this.engine.players
      .map((player) => this.allCardsFrom(player))
      .flat();
  }

  constructor(private engine: Engine) {}

  allCardsFrom(player: Player) {
    return [player.hero, ...player.hand, ...player.deck, ...player.minions];
  }

  startOfGame() {
    this.engine.players.forEach((player) => {
      this.allCardsFrom(player).forEach((source) => {
        this.trigger("startOfGame", { player, source });
      });
    });
  }

  // plays card from player's hand and returns if the action was completed
  play({ player, source }: Context) {
    const srcIndex = player.hand.findIndex((c) => c === source);
    if (srcIndex < 0) return false;
    // remove card from hand
    player.hand.splice(srcIndex, 1)[0];
    // place card on board
    player.minions.push(source);
    // TODO trigger "minionSpawn" event
    this.trigger("battlecry", { player, source });

    return true;
  }

  endTurn() {
    const player = this.engine.turnPlayer;
    const source = player.hero;
    this.engine.turn++;
    this.engine.turnPlayerIndex = Number(!this.engine.turnPlayerIndex);
    this.trigger("endOfTurn", { player, source });

    this.addMaxMana({ player, source });
    this.refreshMana({ player, source });
    this.trigger("manaGain", { player, source });
  }

  trigger(eventName: EngineEventName, ctx: Context) {
    this.allCards.forEach((c) => {
      const enchants = [c.defaultEnchantments, c.enchantments].flat();
      enchants.forEach((enc) => {
        const evs = enc?.events.get(eventName);
        evs?.forEach((ev) => ev(ctx, this));
      });
    });
  }

  addMaxMana({ player }: Context) {
    if (!player) return;
    if (player.maxMana <= player.maxManaLimit) {
      player.maxMana++;
    }
  }

  refreshMana({ player }: Context) {
    player.mana = player.maxMana;
  }

  attack({ player, source, target }: AttackContext) {
    source.health -= target.attack;
    target.health -= source.attack;
    // TODO beforeAttack
    const damage = source.attack;
    this.dealDamage({ player, source, target, damage });
    this.trigger("attack", { player, source, damage });
    // TODO "attacked" && "beforeAttacked" event ?
  }

  dealDamage({ player, source, target, damage }: DealDamageContext) {
    target.health -= damage;
    this.trigger("damage", { player, source, target, damage });
  }

  // TODO create test file
  destroy(ctx: Context) {
    let index = -1;
    for (let player of this.engine.players) {
      index = player.minions.findIndex((card) => card == ctx.target);
      if (index > -1) {
        player.minions.slice(index, 1);
        this.trigger("death", ctx);
        return;
      }
      // TODO if pLayer.weapon
      if (player.hero == ctx.target) {
        this.trigger("death", ctx); // TODO win
        return;
      }
    }
  }
}
