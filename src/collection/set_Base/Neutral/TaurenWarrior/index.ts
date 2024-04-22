import type ICard from "@/interfaces/card"

const TaurenWarrior: ICard<"minion"> = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 2,
  cost: 3,
  name: "Tauren Warrior",
  text: "<b>Taunt</b>. <b>Enrage:</b> +3 Attack",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...TaurenWarrior };
  },
}

export default TaurenWarrior
