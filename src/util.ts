/** Random number generator. min and max are inclusive. */
export function rng(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** shuffle given array using fisher-yates algorithm */
export function shuffle(arr: Array<any>): void {
  const len = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    const n = rng(i, len);
    [arr[i], arr[n]] = [arr[n], arr[i]];
  }
}

/** Python-like range function that returns an array from `0` to `count - 1` */
export function range(count: number): Array<number> {
  return Array.from(Array(5), (_, i) => i);
}
