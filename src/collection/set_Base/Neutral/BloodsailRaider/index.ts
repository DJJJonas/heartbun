import type ICard from "@/interfaces/card"

const BloodsailRaider: ICard = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 2,
  cost: 2,
  name: "Bloodsail Raider",
  text: "<b>Battlecry:</b> Gain Attack equal to the Attack of your weapon.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...BloodsailRaider };
  },
}

export default BloodsailRaider
