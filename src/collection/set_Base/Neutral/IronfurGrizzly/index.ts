import type ICard from "@/interfaces/card"

const IronfurGrizzly: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 3,
  attack: 3,
  cost: 3,
  name: "Ironfur Grizzly",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...IronfurGrizzly };
  },
}

export default IronfurGrizzly
