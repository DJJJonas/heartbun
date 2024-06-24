import type { Event, EventName, MinionTrybe } from "@/types";
import type Card from "./card";

export default interface Enchantment {
  source?: Card; // natural enchantments like the card's text don't have source
  id?: number; // set during gameplay
  name?: string;
  cost?: number;
  attack?: number;
  maxHealth?: number;
  trybe?: MinionTrybe;

  events: Map<EventName, Array<Event>>;
}
