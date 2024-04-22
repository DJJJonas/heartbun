import type ICard from "@/interfaces/card"

const ChillwindYeti: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 5,
  attack: 4,
  cost: 4,
  name: "Chillwind Yeti",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ChillwindYeti };
  },
}

export default ChillwindYeti
