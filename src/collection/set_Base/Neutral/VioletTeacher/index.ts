import type ICard from "@/interfaces/card"

const VioletTeacher: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 5,
  attack: 3,
  cost: 4,
  name: "Violet Teacher",
  text: "Whenever you cast a spell, summon a 1/1 Violet Apprentice.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...VioletTeacher };
  },
}

export default VioletTeacher
