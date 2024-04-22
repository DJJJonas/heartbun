import type ICard from "@/interfaces/card"

const NoviceEngineer: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 1,
  cost: 2,
  name: "Novice Engineer",
  text: "<b>Battlecry:</b> Draw a card.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...NoviceEngineer };
  },
}

export default NoviceEngineer
