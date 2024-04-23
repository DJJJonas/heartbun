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
