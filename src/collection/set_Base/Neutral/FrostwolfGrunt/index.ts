import type Card from "@/interfaces/card"

const FrostwolfGrunt: Card = {
  class: "neutral",
  rarity: undefined,
  health: 2,
  attack: 2,
  cost: 2,
  name: "Frostwolf Grunt",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...FrostwolfGrunt };
  },
}

export default FrostwolfGrunt
