import type Card from "@/interfaces/card"

const SpitefulSmith: Card = {
  class: "neutral",
  rarity: "common",
  health: 6,
  attack: 4,
  cost: 5,
  name: "Spiteful Smith",
  text: "<b>Enrage:</b> Your weapon has +2 Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SpitefulSmith };
  },
}

export default SpitefulSmith
