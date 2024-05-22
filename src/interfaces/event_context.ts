import type Card from "./card";
import type Player from "./player";

export interface Context {
  source: Card;
  player: Player;
  target?: Card;
  damage?: number;
  heal?: number;
}
