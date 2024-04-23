import type ICard from "@/interfaces/card"

const LordoftheArena: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 5,
  attack: 6,
  cost: 6,
  name: "Lord of the Arena",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...LordoftheArena };
  },
}

export default LordoftheArena
