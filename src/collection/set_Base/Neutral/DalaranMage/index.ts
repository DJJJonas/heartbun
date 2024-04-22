import type ICard from "@/interfaces/card"

const DalaranMage: ICard<"minion"> = {
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
