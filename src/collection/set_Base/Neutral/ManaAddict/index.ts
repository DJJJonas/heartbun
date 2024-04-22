import type ICard from "@/interfaces/card"

const ManaAddict: ICard<"minion"> = {
  class: "neutral",
  rarity: "rare",
  health: 3,
  attack: 1,
  cost: 2,
  name: "Mana Addict",
  text: "Whenever you cast a spell, gain +2 Attack this turn.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ManaAddict };
  },
}

export default ManaAddict
