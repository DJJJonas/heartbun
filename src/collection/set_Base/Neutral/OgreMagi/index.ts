import type ICard from "@/interfaces/card"

const OgreMagi: ICard<"minion"> = {
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
