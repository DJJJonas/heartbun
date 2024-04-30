import type Card from "@/interfaces/card"

const Onyxia: Card = {
  class: "neutral",
  rarity: "legendary",
  health: 8,
  attack: 8,
  cost: 9,
  name: "Onyxia",
  text: "<b>Battlecry:</b> Summon 1/1 Whelps until your side of the battlefield is full.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Onyxia };
  },
}

export default Onyxia
