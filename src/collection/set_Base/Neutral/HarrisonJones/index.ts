import type Card from "@/interfaces/card"

const HarrisonJones: Card = {
  class: "neutral",
  rarity: "legendary",
  health: 4,
  attack: 5,
  cost: 5,
  name: "Harrison Jones",
  text: "<b>Battlecry:</b> Destroy your opponent's weapon and draw cards equal to its Durability.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...HarrisonJones };
  },
}

export default HarrisonJones
