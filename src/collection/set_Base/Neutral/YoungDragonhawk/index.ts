import type ICard from "@/interfaces/card"

const YoungDragonhawk: ICard = {
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
