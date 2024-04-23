import type ICard from "@/interfaces/card"

const WindfuryHarpy: ICard = {
  class: "neutral",
  rarity: "common",
  health: 5,
  attack: 4,
  cost: 6,
  name: "Windfury Harpy",
  text: "<b>Windfury</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...WindfuryHarpy };
  },
}

export default WindfuryHarpy
