import type ICard from "@/interfaces/card"

const Abomination: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 4,
  attack: 4,
  cost: 5,
  name: "Abomination",
  text: "<b>Taunt</b>. <b>Deathrattle:</b> Deal 2 damage to ALL characters.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Abomination };
  },
}

export default Abomination
