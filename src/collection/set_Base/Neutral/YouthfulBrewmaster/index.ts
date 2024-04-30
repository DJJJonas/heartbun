import type Card from "@/interfaces/card"

const YouthfulBrewmaster: Card = {
  class: "neutral",
  rarity: "common",
  health: 2,
  attack: 3,
  cost: 2,
  name: "Youthful Brewmaster",
  text: "<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...YouthfulBrewmaster };
  },
}

export default YouthfulBrewmaster
