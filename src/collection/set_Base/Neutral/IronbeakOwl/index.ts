import type ICard from "@/interfaces/card"

const IronbeakOwl: ICard = {
  class: "neutral",
  rarity: "common",
  health: 1,
  attack: 2,
  cost: 2,
  name: "Ironbeak Owl",
  text: "<b>Battlecry:</b> <b>Silence</b> a minion.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...IronbeakOwl };
  },
}

export default IronbeakOwl
