import type ICard from "@/interfaces/card"

const BoulderfistOgre: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 7,
  attack: 6,
  cost: 6,
  name: "Boulderfist Ogre",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...BoulderfistOgre };
  },
}

export default BoulderfistOgre
