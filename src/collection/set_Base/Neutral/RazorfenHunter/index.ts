import type ICard from "@/interfaces/card"

const RazorfenHunter: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 3,
  attack: 2,
  cost: 3,
  name: "Razorfen Hunter",
  text: "<b>Battlecry:</b> Summon a 1/1 Boar.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...RazorfenHunter };
  },
}

export default RazorfenHunter
