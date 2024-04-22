import type ICard from "@/interfaces/card"

const HarrisonJones: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 4,
  attack: 5,
  cost: 5,
  name: "Harrison Jones",
  text: "<b>Battlecry:</b> Destroy your opponent's weapon and draw cards equal to its Durability.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...HarrisonJones };
  },
}

export default HarrisonJones
