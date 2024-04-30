import type Card from "@/interfaces/card"

const Malygos: Card = {
  class: "neutral",
  rarity: "legendary",
  health: 12,
  attack: 4,
  cost: 9,
  name: "Malygos",
  text: "<b>Spell Damage +5</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Malygos };
  },
}

export default Malygos
