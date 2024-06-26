import type { MessageAction } from "@/types";
import type Card from "./card";

export interface EngineMessage {
  action: MessageAction;
  type?: "request" | "response";
  cards?: Array<Card>;
  sourceId?: number; // TODO create separate messages for mulliganMessageHandler and normalMessageHandler
  targetId?: number;
  ids?: Array<number>;
  player?: number;
}
