import type ICard from "@/interfaces/card"

const RecklessRocketeer: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 2,
  attack: 5,
  cost: 6,
  name: "Reckless Rocketeer",
  text: "<b>Charge</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...RecklessRocketeer };
  },
}

export default RecklessRocketeer
