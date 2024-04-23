import type ICard from "@/interfaces/card"

const AncientMage: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 5,
  attack: 2,
  cost: 4,
  name: "Ancient Mage",
  text: "<b>Battlecry:</b> Give adjacent minions <b>Spell Damage +1</b>.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...AncientMage };
  },
}

export default AncientMage
