import type ICard from "@/interfaces/card"

const FlesheatingGhoul: ICard<"minion"> = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 2,
  cost: 3,
  name: "Flesheating Ghoul",
  text: "Whenever a minion dies, gain +1 Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...FlesheatingGhoul };
  },
}

export default FlesheatingGhoul
