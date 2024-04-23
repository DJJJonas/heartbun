import type ICard from "@/interfaces/card"

const IronforgeRifleman: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 2,
  attack: 2,
  cost: 3,
  name: "Ironforge Rifleman",
  text: "<b>Battlecry:</b> Deal 1 damage.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...IronforgeRifleman };
  },
}

export default IronforgeRifleman
