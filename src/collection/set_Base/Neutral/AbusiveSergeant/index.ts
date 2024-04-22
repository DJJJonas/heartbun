import type ICard from "@/interfaces/card"

const AbusiveSergeant: ICard<"minion"> = {
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
