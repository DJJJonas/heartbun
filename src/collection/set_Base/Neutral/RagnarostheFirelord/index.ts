import type ICard from "@/interfaces/card"

const RagnarostheFirelord: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 8,
  attack: 8,
  cost: 8,
  name: "Ragnaros the Firelord",
  text: "Can't attack. At the end of your turn, deal 8 damage to a random enemy.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...RagnarostheFirelord };
  },
}

export default RagnarostheFirelord
