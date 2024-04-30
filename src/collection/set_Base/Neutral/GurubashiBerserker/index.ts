import type Card from "@/interfaces/card"

const GurubashiBerserker: Card = {
  class: "neutral",
  rarity: undefined,
  health: 7,
  attack: 2,
  cost: 5,
  name: "Gurubashi Berserker",
  text: "Whenever this minion takes damage, gain +3 Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...GurubashiBerserker };
  },
}

export default GurubashiBerserker
