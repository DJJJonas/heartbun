import type ICard from "@/interfaces/card"

const ColdlightOracle: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 2,
  cost: 3,
  name: "Coldlight Oracle",
  text: "<b>Battlecry:</b> Each player draws 2 cards.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ColdlightOracle };
  },
}

export default ColdlightOracle
