import type ICard from "@/interfaces/card"

const MountainGiant: ICard<"minion"> = {
  class: "neutral",
  rarity: "epic",
  health: 8,
  attack: 8,
  cost: 12,
  name: "Mountain Giant",
  text: "Costs (1) less for each other card in your hand.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MountainGiant };
  },
}

export default MountainGiant
