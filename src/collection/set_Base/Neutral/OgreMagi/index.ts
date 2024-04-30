import type Card from "@/interfaces/card"

const OgreMagi: Card = {
  class: "neutral",
  rarity: undefined,
  health: 4,
  attack: 4,
  cost: 4,
  name: "Ogre Magi",
  text: "<b>Spell Damage +1</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...OgreMagi };
  },
}

export default OgreMagi
