import type Card from "@/interfaces/card"

const MindControlTech: Card = {
  class: "neutral",
  rarity: "rare",
  health: 3,
  attack: 3,
  cost: 3,
  name: "Mind Control Tech",
  text: "<b>Battlecry:</b> If your opponent has 4 or more minions, take control of one at random.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MindControlTech };
  },
}

export default MindControlTech
