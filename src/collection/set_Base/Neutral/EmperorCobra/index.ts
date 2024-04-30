import type Card from "@/interfaces/card"

const EmperorCobra: Card = {
  class: "neutral",
  rarity: "rare",
  health: 3,
  attack: 2,
  cost: 3,
  name: "Emperor Cobra",
  text: "Destroy any minion damaged by this minion.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...EmperorCobra };
  },
}

export default EmperorCobra
