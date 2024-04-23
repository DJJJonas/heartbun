import type ICard from "@/interfaces/card"

const Nightblade: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 4,
  attack: 4,
  cost: 5,
  name: "Nightblade",
  text: "<b>Battlecry: </b>Deal 3 damage to the enemy hero.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Nightblade };
  },
}

export default Nightblade
