import type ICard from "@/interfaces/card"

const NatPagle: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 4,
  attack: 0,
  cost: 2,
  name: "Nat Pagle",
  text: "At the start of your turn, you have a 50% chance to draw an extra card.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...NatPagle };
  },
}

export default NatPagle
