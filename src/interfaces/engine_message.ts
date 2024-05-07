import type { EngineMessageAction } from "@/types";
import type Card from "./card";

export interface EngineMessage {
  action: EngineMessageAction;
  type?: "request" | "response";
  cards?: Array<Card>;
  ids?: Array<number>;
  player?: number;
}
