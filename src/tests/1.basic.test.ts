import { test, expect } from "bun:test";
import Collection from "@/collection/set_Base/Neutral";
import type Card from "@/interfaces/card";
import ArgentSquire from "@/collection/set_Base/Neutral/ArgentSquire";
import Engine from "@/engine";
import type Deck from "@/interfaces/deck";

// Mock
test("mock", () => {
  const player1deck = sampleDeck();
  const player2deck = sampleDeck();
  // Decks will be shuffled.
  const game = new Engine(player1deck, player2deck);
  // Player 1 will receive 3 cards for mulligan
  // Player 2 will receive 4 cards for mulligan
  game.start();
  const msg1 = game.player1Messages.pop();
  const msg2 = game.player2Messages.pop();

  const p1 = game.players[0];
  const p2 = game.players[1];
  // TODO
  // `mulligan` will receive the id of the cards the player
  // want to switch
  // In the following case, both players
  // will switch their whole hand
  game.send({
    action: "mulligan",
    ids: p1.hand.map((card) => card.id!),
    player: 0,
  });
  game.send({
    action: "mulligan",
    ids: p2.hand.map((card) => card.id!),
    player: 1,
  });
  expect(p1.hand).toBeArrayOfSize(3);
  expect(p2.hand).toBeArrayOfSize(4);
  expect(game.turnPlayerIndex).toBe(0); // First player's turn
  // Player one check
  expect(p1.health).toBe(30);
  expect(p1.armor).toBe(0);
  expect(p1.mana).toBe(1);
  expect(p1.maxMana).toBe(1);
  expect(p1.maxManaLimit).toBe(10);
  // Player two check
  expect(p2.health).toBe(30);
  expect(p2.armor).toBe(0);
  expect(p2.mana).toBe(1);
  expect(p2.maxMana).toBe(1);
  expect(p2.maxManaLimit).toBe(10);
  // PlayCard will receive the id of the card
  // and by default the player of the current
  // turn will be the one who played
  //// game.playCard(p1hand[0].id!);
  game.send({
    action: "play",
    cards: [],
  });
  // Player 1 end turn
  game.send({
    action: "endturn",
  });
  expect(game.turnPlayerIndex).toBe(1); // Second player's turn
  // Now player two will play a card
  // game.playCard(p2hand[0].id!);
  // End game and set player one to winner
  // game.forceWinner(0);
});

function sample() {
  const rng = Math.floor(Math.random() * Collection.length);
  return Collection[rng];
}

function sampleDeck(): Deck {
  // @ts-expect-error
  let deck: Deck = { cards: [] };
  // Fill deck with 30 1/1's
  for (let i = 0; i < 30; i++)
    deck.cards.push(Object.assign({ ...ArgentSquire }));
  return deck;
}
