import type Card from "@/interfaces/card"

const QuestingAdventurer: Card = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 2,
  cost: 3,
  name: "Questing Adventurer",
  text: "Whenever you play a card, gain +1/+1.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...QuestingAdventurer };
  },
}

export default QuestingAdventurer
