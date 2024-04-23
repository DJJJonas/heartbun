import type ICard from "@/interfaces/card"

const Spellbreaker: ICard = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 4,
  cost: 4,
  name: "Spellbreaker",
  text: "<b>Battlecry:</b> <b>Silence</b> a minion.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Spellbreaker };
  },
}

export default Spellbreaker
