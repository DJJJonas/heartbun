import type ICard from "@/interfaces/card"

const FacelessManipulator: ICard = {
  class: "neutral",
  rarity: "epic",
  health: 3,
  attack: 3,
  cost: 5,
  name: "Faceless Manipulator",
  text: "<b>Battlecry:</b> Choose a minion and become a copy of it.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...FacelessManipulator };
  },
}

export default FacelessManipulator
