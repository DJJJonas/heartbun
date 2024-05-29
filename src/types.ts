import type EventManager from "./engine/event_manager";
import type { Context } from "./interfaces/event_context";

//? order: attack+health | attack-only | health-only | none
export type CardType = "hero" | "minion" | "weapon" | "spell";

//? base, generated and token cards have undefined/null rarity
export type Rarity = "common" | "rare" | "epic" | "legendary";

export type MinionTrybe =
  | "all"
  | "beast"
  | "demon"
  | "dragon"
  | "elemental"
  | "mech"
  | "murloc"
  | "naga"
  | "pirate"
  | "quilboar"
  | "totem"
  | "undead";

export type HeroClass =
  | "neutral"
  | "druid"
  | "hunter"
  | "mage"
  | "paladin"
  | "priest"
  | "rogue"
  | "shaman"
  | "warlock"
  | "warrior";

export type Event = (c: Context, e: EventManager) => void;

export enum EventName {
  Death = "death",
  Battlecry = "battlecry",
  StartOfGame = "startOfGame",
  Mulligan = "mulligan",
  EndOfTurn = "endOfTurn",
  ManaGain = "manaGain",
  Attack = "attack",
  Damage = "damage",
  Spawn = "spawn",
}

export function isEventName(value: string): value is EventName {
  return Object.values(EventName).includes(value as EventName);
}

export enum MessageAction {
  Mulligan = "mulligan",
  Free = "free",
  Play = "play",
  Attack = "attack",
  EndTurn = "endturn",
}

export function isMessageAction(value: string): value is MessageAction {
  return Object.values(MessageAction).includes(value as MessageAction);
}
