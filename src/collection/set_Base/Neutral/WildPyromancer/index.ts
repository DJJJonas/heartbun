import type ICard from "@/interfaces/card"

const WildPyromancer: ICard<"minion"> = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 3,
  cost: 2,
  name: "Wild Pyromancer",
  text: "After you cast a spell, deal 1 damage to ALL minions.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...WildPyromancer };
  },
}

export default WildPyromancer
