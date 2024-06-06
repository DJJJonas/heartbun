import Anduin from "@/collection/heros/Priest";
import Ysera from "@/collection/set_Base/Neutral/Ysera";
import type { EngineMessage } from "@/interfaces/engine_message";
import { expect, test } from "bun:test";
import Engine from "..";
import { MessageAction } from "@/types";

test("mock", () => {
  const game = new Engine([{ ...Anduin }], [{ ...Anduin }]);
  const ysera = { ...Ysera };
  let lastMsg: EngineMessage;
  game.players.forEach((p) => (p.messageChannel = (msg) => (lastMsg = msg)));
  game.start();
  game.send({ action: MessageAction.Mulligan, player: 0, ids: [] });
  game.send({ action: MessageAction.Mulligan, player: 1, ids: [] });
  // TODO create spawn method and update this to game.eventManager.spawn(...)
  game.players[0].minions.push(ysera);
  expect(game.players[0].minions).toBeArrayOfSize(1);
  game.eventManager.destroy({
    player: game.players[0],
    source: game.players[0].hero,
    target: ysera,
  });
  expect(game.players[0].minions).toBeArrayOfSize(0);
});
