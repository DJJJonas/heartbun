import type ICard from "@/interfaces/card"

const StampedingKodo: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 5,
  attack: 3,
  cost: 5,
  name: "Stampeding Kodo",
  text: "<b>Battlecry:</b> Destroy a random enemy minion with 2 or less Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...StampedingKodo };
  },
}

export default StampedingKodo
