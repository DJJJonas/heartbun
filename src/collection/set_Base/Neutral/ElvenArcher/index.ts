import type Card from "@/interfaces/card";
import { EventName, type Event } from "@/types";

const events = new Map<EventName, Event[]>();
const ElvenArcher: Card = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 1,
  cost: 1,
  name: "Elven Archer",
  text: "<b>Battlecry:</b> Deal 1 damage.",
  type: "minion",
  portrait: "",
  enchantments: [{ events }],
  requestTargets(eng, thisID) {
    const targets: Set<number> = new Set();
    eng.players.forEach((player) => {
      player.minions.forEach((minion) => targets.add(minion.id!));
    });
    targets.delete(thisID);
    return targets;
  },
};

events.set(EventName.Battlecry, [
  ({ player, source, target }, em) => {
    em.dealDamage({ player, source, target, damage: 1 });
  },
]);

export default ElvenArcher;
