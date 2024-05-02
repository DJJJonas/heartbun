import type { CardType, HeroClass, MinionTrybe, Rarity } from "@/types";
import type Enchantment from "./enchantment";

export default interface Card {
  type: CardType;
  name: string;
  cost: number;
  text: string;
  class: HeroClass;

  id?: number; // set during gameplay
  portrait?: string; // url
  attack?: number; // some cards don't have attack, e.g. spells
  health?: number; // some cards don't have health, e.g. spells
  maxHealth?: number; // set during gameplay
  rarity?: Rarity; // some generated cards (tokens) and base cards don't have rarity
  trybe?: MinionTrybe;

  defaultEnchantments?: Array<Enchantment>; // enchantment of the card's text
  enchantments?: Array<Enchantment>; // set during gameplay
}
