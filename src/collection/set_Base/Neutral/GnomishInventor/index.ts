import type ICard from "@/interfaces/card"

const GnomishInventor: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 4,
  attack: 2,
  cost: 4,
  name: "Gnomish Inventor",
  text: "<b>Battlecry:</b> Draw a card.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...GnomishInventor };
  },
}

export default GnomishInventor
