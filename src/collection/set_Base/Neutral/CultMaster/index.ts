import type Card from "@/interfaces/card"

const CultMaster: Card = {
  class: "neutral",
  rarity: "common",
  health: 2,
  attack: 4,
  cost: 4,
  name: "Cult Master",
  text: "After a friendly minion dies, draw a card.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...CultMaster };
  },
}

export default CultMaster
