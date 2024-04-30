import type Card from "@/interfaces/card"

const Wisp: Card = {
  class: "neutral",
  rarity: "common",
  health: 1,
  attack: 1,
  cost: 0,
  name: "Wisp",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Wisp };
  },
}

export default Wisp
