import type ICard from "@/interfaces/card"

const ElvenArcher: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 1,
  cost: 1,
  name: "Elven Archer",
  text: "<b>Battlecry:</b> Deal 1 damage.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ElvenArcher };
  },
}

export default ElvenArcher
