import type ICard from "@/interfaces/card"

const CoreHound: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 5,
  attack: 9,
  cost: 7,
  name: "Core Hound",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...CoreHound };
  },
}

export default CoreHound
