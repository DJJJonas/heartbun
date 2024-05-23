import type Card from "@/interfaces/card";
import type { Context } from "@/interfaces/event_context";

export interface CardWithAttackAndHealth extends Card {
  attack: number;
  health: number;
}

export interface AttackContext extends Context {
  source: CardWithAttackAndHealth;
  target: CardWithAttackAndHealth;
}

export interface DealDamageContext extends Context {
  source: CardWithAttackAndHealth;
  target: CardWithAttackAndHealth;
  damage: number;
}
