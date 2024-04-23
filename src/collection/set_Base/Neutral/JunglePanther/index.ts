import type ICard from "@/interfaces/card"

const JunglePanther: ICard = {
  class: "neutral",
  rarity: "common",
  health: 2,
  attack: 4,
  cost: 3,
  name: "Jungle Panther",
  text: "<b>Stealth</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...JunglePanther };
  },
}

export default JunglePanther
