import type Card from "@/interfaces/card"

const DalaranMage: Card = {
  class: "neutral",
  rarity: undefined,
  health: 4,
  attack: 1,
  cost: 3,
  name: "Dalaran Mage",
  text: "<b>Spell Damage +1</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...DalaranMage };
  },
}

export default DalaranMage
