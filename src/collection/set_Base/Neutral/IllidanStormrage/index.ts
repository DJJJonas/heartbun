import type Card from "@/interfaces/card"

const IllidanStormrage: Card = {
  class: "neutral",
  rarity: "legendary",
  health: 5,
  attack: 7,
  cost: 6,
  name: "Illidan Stormrage",
  text: "Whenever you play a card, summon a 2/1 Flame of Azzinoth.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...IllidanStormrage };
  },
}

export default IllidanStormrage
