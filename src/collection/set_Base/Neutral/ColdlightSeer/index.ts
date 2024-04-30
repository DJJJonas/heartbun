import type Card from "@/interfaces/card"

const ColdlightSeer: Card = {
  class: "neutral",
  rarity: "rare",
  health: 3,
  attack: 2,
  cost: 3,
  name: "Coldlight Seer",
  text: "<b>Battlecry:</b> Give ALL other Murlocs +2 Health.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ColdlightSeer };
  },
}

export default ColdlightSeer
