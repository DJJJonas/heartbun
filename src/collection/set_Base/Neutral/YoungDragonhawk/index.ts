import type Card from "@/interfaces/card"

const YoungDragonhawk: Card = {
  class: "neutral",
  rarity: "common",
  health: 1,
  attack: 1,
  cost: 1,
  name: "Young Dragonhawk",
  text: "<b>Windfury</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...YoungDragonhawk };
  },
}

export default YoungDragonhawk
