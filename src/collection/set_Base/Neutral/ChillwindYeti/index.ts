import type Card from "@/interfaces/card"

const ChillwindYeti: Card = {
  class: "neutral",
  rarity: undefined,
  health: 5,
  attack: 4,
  cost: 4,
  name: "Chillwind Yeti",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ChillwindYeti };
  },
}

export default ChillwindYeti
