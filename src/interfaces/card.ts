import type {
  Rarity,
  Class,
  MinionTrybe as Trybe,
  Health,
  Attack,
  Type,
} from "@/types";

export default interface ICard<T extends Type> {
  type: T;
  name: string;
  cost: number;
  text: string;
  class: Class;

  portrait?: string; // url
  attack: Attack<T>;
  health?: Health<T>;
  rarity?: Rarity;
  trybe?: Trybe;

  copy: () => ICard<T>;
}
