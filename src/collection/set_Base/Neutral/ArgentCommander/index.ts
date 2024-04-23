import type ICard from "@/interfaces/card"

const ArgentCommander: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 4,
  cost: 6,
  name: "Argent Commander",
  text: "<b>Charge</b> <b>Divine Shield</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ArgentCommander };
  },
}

export default ArgentCommander
