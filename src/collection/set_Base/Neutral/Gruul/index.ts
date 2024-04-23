import type ICard from "@/interfaces/card"

const Gruul: ICard = {
  class: "neutral",
  rarity: "legendary",
  health: 7,
  attack: 7,
  cost: 8,
  name: "Gruul",
  text: "At the end of each turn, gain +1/+1 .",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Gruul };
  },
}

export default Gruul
