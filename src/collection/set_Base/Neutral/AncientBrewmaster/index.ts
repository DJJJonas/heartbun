import type ICard from "@/interfaces/card"

const AncientBrewmaster: ICard = {
  class: "neutral",
  rarity: "common",
  health: 4,
  attack: 5,
  cost: 4,
  name: "Ancient Brewmaster",
  text: "<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...AncientBrewmaster };
  },
}

export default AncientBrewmaster
