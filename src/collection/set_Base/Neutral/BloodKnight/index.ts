import type Card from "@/interfaces/card"

const BloodKnight: Card = {
  class: "neutral",
  rarity: "epic",
  health: 3,
  attack: 3,
  cost: 3,
  name: "Blood Knight",
  text: "<b>Battlecry:</b> All minions lose <b>Divine Shield</b>. Gain +3/+3 for each Shield lost.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...BloodKnight };
  },
}

export default BloodKnight
