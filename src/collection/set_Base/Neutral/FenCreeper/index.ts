import type ICard from "@/interfaces/card"

const FenCreeper: ICard = {
  class: "neutral",
  rarity: "common",
  health: 6,
  attack: 3,
  cost: 5,
  name: "Fen Creeper",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...FenCreeper };
  },
}

export default FenCreeper
