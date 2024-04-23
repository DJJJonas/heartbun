import type ICard from "@/interfaces/card"

const Secretkeeper: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 1,
  cost: 1,
  name: "Secretkeeper",
  text: "Whenever a <b>Secret</b> is played, gain +1/+1.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Secretkeeper };
  },
}

export default Secretkeeper
