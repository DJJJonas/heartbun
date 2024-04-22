// TODO
import { test, expect } from "bun:test";
import Collection from "@/collection/set_Base/Neutral";

function sample() {
  const rng = Math.floor(Math.random() * Collection.length);
  return Collection[rng];
}

test("card copy method", () => {
  const card_sample = sample();
  const copy = card_sample.copy();

  copy.attack += 2;

  expect(card_sample.attack === copy.attack).toBeFalse();
});
