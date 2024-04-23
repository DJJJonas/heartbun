import type ICard from "@/interfaces/card"

const PriestessofElune: ICard = {
  class: "neutral",
  rarity: "common",
  health: 4,
  attack: 5,
  cost: 6,
  name: "Priestess of Elune",
  text: "<b>Battlecry:</b> Restore 4 Health to your hero.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...PriestessofElune };
  },
}

export default PriestessofElune
