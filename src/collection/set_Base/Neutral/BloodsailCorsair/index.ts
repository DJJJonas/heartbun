import type ICard from "@/interfaces/card"

const BloodsailCorsair: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 1,
  cost: 1,
  name: "Bloodsail Corsair",
  text: "<b>Battlecry:</b> Remove 1 Durability from your opponent's weapon.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...BloodsailCorsair };
  },
}

export default BloodsailCorsair
