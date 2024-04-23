import type ICard from "@/interfaces/card"

const MoltenGiant: ICard = {
  class: "neutral",
  rarity: "epic",
  health: 8,
  attack: 8,
  cost: 20,
  name: "Molten Giant",
  text: "Costs (1) less for each damage your hero has taken.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MoltenGiant };
  },
}

export default MoltenGiant
