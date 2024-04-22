import type ICard from "@/interfaces/card"

const SouthseaDeckhand: ICard<"minion"> = {
  class: "neutral",
  rarity: "common",
  health: 1,
  attack: 2,
  cost: 1,
  name: "Southsea Deckhand",
  text: "Has <b>Charge</b> while you have a weapon equipped.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SouthseaDeckhand };
  },
}

export default SouthseaDeckhand
