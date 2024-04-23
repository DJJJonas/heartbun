import type ICard from "@/interfaces/card"

const MurlocRaider: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 2,
  cost: 1,
  name: "Murloc Raider",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MurlocRaider };
  },
}

export default MurlocRaider
