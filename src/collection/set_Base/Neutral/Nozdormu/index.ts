import type ICard from "@/interfaces/card"

const Nozdormu: ICard = {
  class: "neutral",
  rarity: "legendary",
  health: 8,
  attack: 8,
  cost: 9,
  name: "Nozdormu",
  text: "Players only have 15 seconds to take their turns.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Nozdormu };
  },
}

export default Nozdormu
