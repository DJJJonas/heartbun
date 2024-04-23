import type ICard from "@/interfaces/card"

const MurlocTidecaller: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 1,
  cost: 1,
  name: "Murloc Tidecaller",
  text: "Whenever a Murloc is summoned, gain +1 Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MurlocTidecaller };
  },
}

export default MurlocTidecaller
