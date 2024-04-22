import type ICard from "@/interfaces/card"

const LorewalkerCho: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 4,
  attack: 0,
  cost: 2,
  name: "Lorewalker Cho",
  text: "Whenever a player casts a spell, put a copy into the other player’s hand.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...LorewalkerCho };
  },
}

export default LorewalkerCho
