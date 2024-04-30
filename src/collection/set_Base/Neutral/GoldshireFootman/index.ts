import type Card from "@/interfaces/card"

const GoldshireFootman: Card = {
  class: "neutral",
  rarity: undefined,
  health: 2,
  attack: 1,
  cost: 1,
  name: "Goldshire Footman",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...GoldshireFootman };
  },
}

export default GoldshireFootman
