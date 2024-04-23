import type ICard from "@/interfaces/card"

const AzureDrake: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 4,
  attack: 4,
  cost: 5,
  name: "Azure Drake",
  text: "<b>Spell Damage +1</b> <b>Battlecry:</b> Draw a card.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...AzureDrake };
  },
}

export default AzureDrake
