import type Card from "./interfaces/card";

/** Random number generator. min and max are inclusive. */
export function rng(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** Shuffle given array using fisher-yates algorithm. */
export function shuffle(arr: Array<any>): void {
  const len = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    const n = rng(i, len);
    [arr[i], arr[n]] = [arr[n], arr[i]];
  }
}

/** Python-like range function that returns an array from `0` to `count - 1`. */
export function range(count: number): Array<number> {
  return Array.from(Array(5), (_, i) => i);
}

/**
 * Removes the first card from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
export function drawCard(cards: Array<Card>): Card | undefined {
  const card = cards.shift();
  return card;
}

/** Insert card into array and shuffles it. */
export function shuffleCard(card: Card, cards: Array<Card>) {
  cards.push(card);
  shuffle(cards);
}

/**
 * Removes and return the card with the specified `id`.
 * If the card is not found, undefined is returned and the array is not modified.
 */
export function removeCardId(cards: Array<Card>, id: number): Card | undefined {
  const index = cards.findIndex((card) => card.id === id);
  if (index < 0) return undefined;
  return cards.splice(index, 1)[0];
}
