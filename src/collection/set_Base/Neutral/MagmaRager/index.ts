import type ICard from "@/interfaces/card"

const MagmaRager: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 5,
  cost: 3,
  name: "Magma Rager",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MagmaRager };
  },
}

export default MagmaRager
