import type ICard from "@/interfaces/card"

const MasterSwordsmith: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 3,
  attack: 1,
  cost: 2,
  name: "Master Swordsmith",
  text: "At the end of your turn, give another random friendly minion +1 Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MasterSwordsmith };
  },
}

export default MasterSwordsmith
