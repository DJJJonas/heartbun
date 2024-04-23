import type ICard from "@/interfaces/card"

const StormwindKnight: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 5,
  attack: 2,
  cost: 4,
  name: "Stormwind Knight",
  text: "<b>Charge</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...StormwindKnight };
  },
}

export default StormwindKnight
