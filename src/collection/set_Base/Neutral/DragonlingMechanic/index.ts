import type ICard from "@/interfaces/card"

const DragonlingMechanic: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 4,
  attack: 2,
  cost: 4,
  name: "Dragonling Mechanic",
  text: "<b>Battlecry:</b> Summon a 2/1 Mechanical Dragonling.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...DragonlingMechanic };
  },
}

export default DragonlingMechanic
