import type ICard from "@/interfaces/card"

const ShatteredSunCleric: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 2,
  attack: 3,
  cost: 3,
  name: "Shattered Sun Cleric",
  text: "<b>Battlecry:</b> Give a friendly minion +1/+1.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ShatteredSunCleric };
  },
}

export default ShatteredSunCleric
