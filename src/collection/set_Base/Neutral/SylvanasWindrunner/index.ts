import type ICard from "@/interfaces/card"

const SylvanasWindrunner: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 5,
  attack: 5,
  cost: 6,
  name: "Sylvanas Windrunner",
  text: "<b>Deathrattle:</b> Take control of a random enemy minion.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SylvanasWindrunner };
  },
}

export default SylvanasWindrunner
