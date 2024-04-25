/** Random number generator. min and max are inclusive. */
export function rng(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** shuffle given array using fisher-yates algorithm */
export function shuffle(arr: Array<any>) {
  const len = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    const n = rng(i, len);
    [arr[i], arr[n]] = [arr[n], arr[i]];
  }
}
