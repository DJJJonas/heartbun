import type { Context } from "@/interfaces/event_context";
import type Player from "@/interfaces/player";
import { EventName } from "@/types";
import type Engine from ".";
import type { AttackContext, DealDamageContext } from "./interfaces";

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
        this.trigger(EventName.StartOfGame, { player, source });
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
    this.trigger(EventName.Spawn, { player, source });
    this.trigger(EventName.Battlecry, { player, source });

    return true;
  }

  endTurn() {
    const player = this.engine.turnPlayer;
    const source = player.hero;
    this.engine.turn++;
    this.engine.turnPlayerIndex = Number(!this.engine.turnPlayerIndex);
    this.trigger(EventName.EndOfTurn, { player, source });

    this.addMaxMana({ player, source });
    this.refreshMana({ player, source });
    this.trigger(EventName.ManaGain, { player, source });
  }

  trigger(eventName: EventName, ctx: Context) {
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
    const damage = source.attack;
    this.trigger(EventName.Attack, { player, source, damage });
    this.dealDamage({ player, source, target, damage });
  }

  dealDamage({ player, source, target, damage }: DealDamageContext) {
    target.health -= damage;
    this.trigger(EventName.Damage, { player, source, target, damage });
    if (target.health <= 0) {
      this.destroy({ player, source, target });
    }
  }

  // TODO create test file
  destroy(ctx: Context) {
    for (let player of this.engine.players) {
      let cardIndex = player.minions.findIndex((card) => card == ctx.target);
      // Card is a minion
      if (cardIndex > -1) {
        player.minions.slice(cardIndex, 1);
        this.trigger(EventName.Death, ctx);
        return;
      }
      // TODO if player.weapon
      // Card is a hero
      if (ctx.target == player.hero) {
        const opponentIndex = this.engine.players[0] == player ? 0 : 1;
        this.engine.setWinner(opponentIndex);
        return;
      }
    }
  }
}
