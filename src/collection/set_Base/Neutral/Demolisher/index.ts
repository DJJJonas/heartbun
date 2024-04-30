import type Card from "@/interfaces/card"

const Demolisher: Card = {
  class: "neutral",
  rarity: "rare",
  health: 4,
  attack: 1,
  cost: 3,
  name: "Demolisher",
  text: "At the start of your turn, deal 2 damage to a random enemy.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Demolisher };
  },
}

export default Demolisher
