import type Card from "@/interfaces/card"

const RiverCrocolisk: Card = {
  class: "neutral",
  rarity: undefined,
  health: 3,
  attack: 2,
  cost: 2,
  name: "River Crocolisk",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...RiverCrocolisk };
  },
}

export default RiverCrocolisk
