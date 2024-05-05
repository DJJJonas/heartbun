import type { EngineMessageAction } from "@/types";
import type Card from "./card";

/**
 * Type
 * - request - game state is paused until player send the requested action
 * - response - game state changed
 *
 * Action
 * - mulligan - player needs to choose which cards to mulligate
 * - free - player can play any available action (e.g. attack, hero power...)
 *
 * Cards
 * associated cards with the title
 */
export interface EngineMessage {
  action: EngineMessageAction;
  type?: "request" | "response";
  cards?: Array<Card>;
  ids?: Array<string>;
}
