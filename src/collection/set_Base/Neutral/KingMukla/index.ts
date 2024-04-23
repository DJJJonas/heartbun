import type ICard from "@/interfaces/card"

const KingMukla: ICard = {
  class: "neutral",
  rarity: "legendary",
  health: 5,
  attack: 5,
  cost: 3,
  name: "King Mukla",
  text: "<b>Battlecry:</b> Give your opponent 2 Bananas.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...KingMukla };
  },
}

export default KingMukla
