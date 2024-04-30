import type Card from "@/interfaces/card"

const SilverbackPatriarch: Card = {
  class: "neutral",
  rarity: undefined,
  health: 4,
  attack: 1,
  cost: 3,
  name: "Silverback Patriarch",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SilverbackPatriarch };
  },
}

export default SilverbackPatriarch
