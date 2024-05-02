import type { EngineEvent, MinionTrybe } from "@/types";

export default interface Enchantment {
  id?: number; // set during gameplay
  name?: string;
  cost?: number;
  attack?: number;
  maxHealth?: number;
  trybe?: MinionTrybe;

  battlecryEvents: Array<EngineEvent>;
}
