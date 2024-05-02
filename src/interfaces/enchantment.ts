import type { MinionTrybe } from "@/types";

export default interface Enchantment {
  id: number;
  cost: number;
  attack: number;
  maxHealth: number;
  trybe: MinionTrybe;
}
