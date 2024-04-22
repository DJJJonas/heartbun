import type ICard from "@/interfaces/card"

const GoldshireFootman: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 2,
  attack: 1,
  cost: 1,
  name: "Goldshire Footman",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...GoldshireFootman };
  },
}

export default GoldshireFootman
