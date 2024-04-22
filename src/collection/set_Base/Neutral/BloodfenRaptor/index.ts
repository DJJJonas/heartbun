import type ICard from "@/interfaces/card"

const BloodfenRaptor: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 2,
  attack: 3,
  cost: 2,
  name: "Bloodfen Raptor",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...BloodfenRaptor };
  },
}

export default BloodfenRaptor
