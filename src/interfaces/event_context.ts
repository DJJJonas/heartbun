import type Card from "./card";

export interface EventContext {
  source: Card;
  targets?: Array<Card>;
  damageDealt?: number;
  damageTaken?: number;
  damageHealed?: number;
}
