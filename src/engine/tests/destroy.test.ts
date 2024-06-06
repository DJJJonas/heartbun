import Anduin from "@/collection/heros/Priest";
import { expect, test } from "bun:test";
import Engine from "..";
import Ysera from "@/collection/set_Base/Neutral/Ysera";

test("mock", () => {
  const game = new Engine([{ ...Anduin }], [{ ...Anduin }]);
  const ysera = { ...Ysera };
  game.players.forEach(
    (p, i) =>
      (p.messageChannel = (msg) => console.log(`Player ${i}: ${msg.action}`))
  );
  game.start();
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
