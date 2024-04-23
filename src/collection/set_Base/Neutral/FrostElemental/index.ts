import type ICard from "@/interfaces/card"

const FrostElemental: ICard = {
  class: "neutral",
  rarity: "common",
  health: 5,
  attack: 5,
  cost: 6,
  name: "Frost Elemental",
  text: "<b>Battlecry:</b> <b>Freeze</b> a character.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...FrostElemental };
  },
}

export default FrostElemental
