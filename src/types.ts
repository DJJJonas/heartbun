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

export type EngineEvent = (c: Context, e: EventManager) => void;

export type EngineEventName =
  | "battlecry"
  | "startOfGame"
  | "mulligan"
  | "endOfTurn"
  | "manaGain"
  | "attack"
  | "damage";

export type EngineMessageAction =
  | "mulligan"
  | "free"
  | "play"
  | "attack"
  | "endturn";
