import type ICard from "@/interfaces/card"

const BluegillWarrior: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 2,
  cost: 2,
  name: "Bluegill Warrior",
  text: "<b>Charge</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...BluegillWarrior };
  },
}

export default BluegillWarrior
