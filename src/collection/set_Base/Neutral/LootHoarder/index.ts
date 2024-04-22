import type ICard from "@/interfaces/card"

const LootHoarder: ICard<"minion"> = {
  class: "neutral",
  rarity: "common",
  health: 1,
  attack: 2,
  cost: 2,
  name: "Loot Hoarder",
  text: "<b>Deathrattle:</b> Draw a card.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...LootHoarder };
  },
}

export default LootHoarder
