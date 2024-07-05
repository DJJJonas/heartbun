import Anduin from "@/collection/heros/Priest";
import type { EngineMessage } from "@/interfaces/engine_message";
import { MessageAction } from "@/types";
import { expect, test } from "bun:test";
import Engine from "..";
import type Card from "@/interfaces/card";

const Ysera: Card = {
  type: "minion",
  name: "Ysera",
  cost: 0,
  text: "",
  class: "neutral",
  attack: 4,
  health: 12,
};

test("'Destroy' event", () => {
  const game = new Engine([{ ...Anduin }], [{ ...Anduin }]);
  const ysera = { ...Ysera };
  let lastMsg: EngineMessage;
  game.players.forEach((p) => (p.messageChannel = (msg) => (lastMsg = msg)));
  game.start();
  game.send({ action: MessageAction.Mulligan, player: 0, ids: [] });
  game.send({ action: MessageAction.Mulligan, player: 1, ids: [] });

  game.eventManager.spawn({
    player: game.players[0],
    source: game.players[0].hero,
    target: ysera,
  });

  expect(game.players[0].minions).toBeArrayOfSize(1);
  game.eventManager.destroy({
    player: game.players[0],
    source: game.players[0].hero,
    target: ysera,
  });
  expect(game.players[0].minions).toBeArrayOfSize(0);
});
