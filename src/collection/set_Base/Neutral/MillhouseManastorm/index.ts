import type ICard from "@/interfaces/card"

const MillhouseManastorm: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 4,
  attack: 4,
  cost: 2,
  name: "Millhouse Manastorm",
  text: "<b>Battlecry:</b> Enemy spells cost (0) next turn.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MillhouseManastorm };
  },
}

export default MillhouseManastorm
