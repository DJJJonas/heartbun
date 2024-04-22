import type ICard from "@/interfaces/card"

const SouthseaCaptain: ICard<"minion"> = {
  class: "neutral",
  rarity: "epic",
  health: 3,
  attack: 3,
  cost: 3,
  name: "Southsea Captain",
  text: "Your other Pirates have +1/+1.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SouthseaCaptain };
  },
}

export default SouthseaCaptain
