import type ICard from "@/interfaces/card"

const WorgenInfiltrator: ICard = {
  class: "neutral",
  rarity: "common",
  health: 1,
  attack: 2,
  cost: 1,
  name: "Worgen Infiltrator",
  text: "<b>Stealth</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...WorgenInfiltrator };
  },
}

export default WorgenInfiltrator
