import type Card from "@/interfaces/card"

const AcolyteofPain: Card = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 1,
  cost: 3,
  name: "Acolyte of Pain",
  text: "Whenever this minion takes damage, draw a card.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...AcolyteofPain };
  },
}

export default AcolyteofPain
