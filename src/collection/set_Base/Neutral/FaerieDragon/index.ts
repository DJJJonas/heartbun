import type ICard from "@/interfaces/card"

const FaerieDragon: ICard = {
  class: "neutral",
  rarity: "common",
  health: 2,
  attack: 3,
  cost: 2,
  name: "Faerie Dragon",
  text: "<b>Elusive</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...FaerieDragon };
  },
}

export default FaerieDragon
