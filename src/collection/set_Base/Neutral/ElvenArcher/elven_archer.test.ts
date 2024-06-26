import Anduin from "@/collection/heros/Priest";
import Engine from "@/engine";
import { MessageAction } from "@/types";
import { expect, test } from "bun:test";
import ElvenArcher from ".";

test("Elven Archer test", () => {
  const game = new Engine([{ ...Anduin }], [{ ...Anduin }]);
  const archer = { ...ElvenArcher };

  game.start();
  game.send({ action: MessageAction.Mulligan, player: 0, ids: [] });
  game.send({ action: MessageAction.Mulligan, player: 1, ids: [] });

  // TODO create addToHand event
  archer.id = game.globalID++;
  game.players[0].hand.push(archer);

  game.eventManager.play({
    player: game.players[0],
    source: archer,
    target: game.players[1].hero,
  });

  expect(game.players[1].hero.health).toBe(29);
});
