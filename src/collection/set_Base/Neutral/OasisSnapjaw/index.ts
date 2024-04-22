import type ICard from "@/interfaces/card"

const OasisSnapjaw: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 7,
  attack: 2,
  cost: 4,
  name: "Oasis Snapjaw",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...OasisSnapjaw };
  },
}

export default OasisSnapjaw
