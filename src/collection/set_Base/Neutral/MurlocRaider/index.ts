import type Card from "@/interfaces/card"

const MurlocRaider: Card = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 2,
  cost: 1,
  name: "Murloc Raider",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MurlocRaider };
  },
}

export default MurlocRaider
