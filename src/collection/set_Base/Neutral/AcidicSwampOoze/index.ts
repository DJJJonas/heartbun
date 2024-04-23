import type ICard from "@/interfaces/card"

const AcidicSwampOoze: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 2,
  attack: 3,
  cost: 2,
  name: "Acidic Swamp Ooze",
  text: "<b>Battlecry:</b> Destroy your opponent's weapon.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...AcidicSwampOoze };
  },
}

export default AcidicSwampOoze
