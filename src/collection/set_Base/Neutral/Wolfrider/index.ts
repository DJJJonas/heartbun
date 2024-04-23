import type ICard from "@/interfaces/card"

const Wolfrider: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 3,
  cost: 3,
  name: "Wolfrider",
  text: "<b>Charge</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Wolfrider };
  },
}

export default Wolfrider
