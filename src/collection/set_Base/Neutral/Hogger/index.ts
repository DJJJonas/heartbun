import type ICard from "@/interfaces/card"

const Hogger: ICard = {
  class: "neutral",
  rarity: "legendary",
  health: 4,
  attack: 4,
  cost: 6,
  name: "Hogger",
  text: "At the end of your turn, summon a 2/2 Gnoll with <b>Taunt</b>.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Hogger };
  },
}

export default Hogger
