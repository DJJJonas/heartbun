//? order: attack+health | attack-only | health-only | none
export type Type = "hero" | "minion" | "weapon" | "spell";
export type Attack<T extends Type> = T extends "hero" | "minion" | "weapon"
  ? number
  : undefined;
export type Health<T extends Type> = T extends "hero" | "minion" | "weapon"
  ? number
  : undefined;

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

export type Class =
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
