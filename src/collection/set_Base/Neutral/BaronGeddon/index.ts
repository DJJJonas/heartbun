import type ICard from "@/interfaces/card"

const BaronGeddon: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 5,
  attack: 7,
  cost: 7,
  name: "Baron Geddon",
  text: "At the end of your turn, deal 2 damage to ALL other characters.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...BaronGeddon };
  },
}

export default BaronGeddon
