import type ICard from "@/interfaces/card"

const YoungPriestess: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 1,
  attack: 2,
  cost: 1,
  name: "Young Priestess",
  text: "At the end of your turn, give another random friendly minion +1 Health.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...YoungPriestess };
  },
}

export default YoungPriestess
