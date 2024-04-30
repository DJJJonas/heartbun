import type Card from "@/interfaces/card"

const MurlocTidehunter: Card = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 2,
  cost: 2,
  name: "Murloc Tidehunter",
  text: "<b>Battlecry:</b> Summon a 1/1 Murloc Scout.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MurlocTidehunter };
  },
}

export default MurlocTidehunter
