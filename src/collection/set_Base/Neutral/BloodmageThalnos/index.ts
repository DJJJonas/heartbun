import type ICard from "@/interfaces/card"

const BloodmageThalnos: ICard = {
  class: "neutral",
  rarity: "legendary",
  health: 1,
  attack: 1,
  cost: 2,
  name: "Bloodmage Thalnos",
  text: "<b>Spell Damage +1</b> <b>Deathrattle:</b> Draw a card.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...BloodmageThalnos };
  },
}

export default BloodmageThalnos
