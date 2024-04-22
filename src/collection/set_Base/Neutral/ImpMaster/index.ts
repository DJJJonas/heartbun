import type ICard from "@/interfaces/card"

const ImpMaster: ICard<"minion"> = {
  class: "neutral",
  rarity: "rare",
  health: 5,
  attack: 1,
  cost: 3,
  name: "Imp Master",
  text: "At the end of your turn, deal 1 damage to this minion and summon a 1/1 Imp.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ImpMaster };
  },
}

export default ImpMaster
