import type ICard from "@/interfaces/card"

const Shieldbearer: ICard = {
  class: "neutral",
  rarity: "common",
  health: 4,
  attack: 0,
  cost: 1,
  name: "Shieldbearer",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Shieldbearer };
  },
}

export default Shieldbearer
