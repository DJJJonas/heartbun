import Anduin from "@/collection/heros/Priest";
import ElvenArcher from "@/collection/set_Base/Neutral/ElvenArcher";
import type { EngineMessage } from "@/interfaces/engine_message";
import { MessageAction } from "@/types";
import { test, expect } from "bun:test";
import Engine from "..";

test("battlecry", () => {
  const game = new Engine([{ ...Anduin }], [{ ...Anduin }]);
  const archer = { ...ElvenArcher };

  let lastMsg: EngineMessage;
  game.players.forEach((p) => (p.messageChannel = (msg) => (lastMsg = msg)));
  game.start();
  game.send({ action: MessageAction.Mulligan, player: 0, ids: [] });
  game.send({ action: MessageAction.Mulligan, player: 1, ids: [] });

  archer.id = game.globalID++;
  game.players[0].hand.push(archer);

  const player = game.players[0];
  const source = archer;
  const target = game.players[1].hero;
  game.eventManager.play({ player, source, target });

  expect(target.health).toBe(29);
});
