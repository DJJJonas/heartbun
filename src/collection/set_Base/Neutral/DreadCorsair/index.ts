import type Card from "@/interfaces/card"

const DreadCorsair: Card = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 3,
  cost: 4,
  name: "Dread Corsair",
  text: "<b>Taunt</b> Costs (1) less per Attack of your weapon.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...DreadCorsair };
  },
}

export default DreadCorsair
