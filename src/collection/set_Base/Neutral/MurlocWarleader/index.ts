import type ICard from "@/interfaces/card"

const MurlocWarleader: ICard = {
  class: "neutral",
  rarity: "epic",
  health: 3,
  attack: 3,
  cost: 3,
  name: "Murloc Warleader",
  text: "ALL other murlocs have +2/+1.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MurlocWarleader };
  },
}

export default MurlocWarleader
