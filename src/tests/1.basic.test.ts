import Anduin from "@/collection/heros/Priest";
import Engine from "@/engine";
import type Card from "@/interfaces/card";
import type { EngineMessage } from "@/interfaces/engine_message";
import { MessageAction } from "@/types";
import { range } from "@/util";
import { expect, test } from "bun:test";

const ArgentSquire: Card = {
  type: "minion",
  name: "Argent Squire",
  cost: 0,
  text: "Divine Shield",
  class: "neutral",
  attack: 1,
  health: 1,
};

test("Basic test", () => {
  const player1deck = sampleDeck();
  const player2deck = sampleDeck();
  // Decks will be shuffled.
  const game = new Engine(player1deck, player2deck);
  let lastMsg: EngineMessage;
  game.players.forEach((p) => {
    p.messageChannel = (msg) => (lastMsg = msg);
  });
  // Player 1 will receive 3 cards for mulligan
  // Player 2 will receive 4 cards for mulligan
  game.start();

  const [p1, p2] = game.players;
  // `mulligan` will receive the id of the cards the player
  // want to switch
  // In the following case, both players
  // will switch their whole hand
  game.send({
    player: 0,
    action: MessageAction.Mulligan,
    ids: p1.hand.map((card) => card.id!),
  });
  game.send({
    player: 1,
    action: MessageAction.Mulligan,
    ids: p2.hand.map((card) => card.id!),
  });
  expect(p1.hand).toBeArrayOfSize(3);
  expect(p2.hand).toBeArrayOfSize(4);
  expect(game.turnPlayerIndex).toBe(0); // First player's turn
  // Player one check
  expect(p1.hero.health).toBe(30);
  expect(p1.armor).toBe(0);
  expect(p1.mana).toBe(1);
  expect(p1.maxMana).toBe(1);
  expect(p1.maxManaLimit).toBe(10);
  // Player two check
  expect(p2.hero.health).toBe(30);
  expect(p2.armor).toBe(0);
  expect(p2.mana).toBe(0);
  expect(p2.maxMana).toBe(0);
  expect(p2.maxManaLimit).toBe(10);
  // PlayCard will receive the id of the card
  // and by default the player of the current
  // turn will be the one who played
  game.send({
    player: 0,
    action: MessageAction.Play,
    sourceId: p1.hand[0].id,
  });
  expect(p1.minions.length).toBe(1);
  expect(p1.minions[0].name).toBe(ArgentSquire.name);
  // Player 1 end turn
  game.send({
    player: 0,
    action: MessageAction.EndTurn,
  });
  expect(game.turnPlayerIndex).toBe(1); // Second player's turn
  // Player 2 skip turn
  game.send({
    player: 1,
    action: MessageAction.EndTurn,
  });
  expect(game.turnPlayerIndex).toBe(0); // First player's turn

  const p1minion = p1.minions[0].id!;
  const p2hero = p2.hero.id!;
  range(30).forEach((_) => {
    game.send({
      player: 0,
      action: MessageAction.Attack,
      sourceId: p1minion,
      targetId: p2hero,
    });
    game.send({
      player: 0,
      action: MessageAction.EndTurn,
    });
    game.send({
      player: 1,
      action: MessageAction.EndTurn,
    });
  });
  // End game and set player one to winner
  // game.forceWinner(0);
});

function sampleDeck(): Array<Card> {
  let deck: Array<Card> = [];
  // Fill deck with 30 1/1's
  deck.push({ ...Anduin });
  for (let i = 0; i < 30; i++) deck.push({ ...ArgentSquire });
  return deck;
}
