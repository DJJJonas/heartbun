import type Card from "@/interfaces/card"

const AbusiveSergeant: Card = {
  class: "neutral",
  rarity: "common",
  health: 1,
  attack: 2,
  cost: 1,
  name: "Abusive Sergeant",
  text: "<b>Battlecry:</b> Give a minion +2 Attack this turn.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...AbusiveSergeant };
  },
}

export default AbusiveSergeant
