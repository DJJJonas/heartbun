import type Card from "@/interfaces/card"

const MadBomber: Card = {
  class: "neutral",
  rarity: "common",
  health: 2,
  attack: 3,
  cost: 2,
  name: "Mad Bomber",
  text: "<b>Battlecry:</b> Deal 3 damage randomly split between all other characters.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MadBomber };
  },
}

export default MadBomber
