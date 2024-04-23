import type ICard from "@/interfaces/card"

const LeperGnome: ICard = {
  class: "neutral",
  rarity: "common",
  health: 1,
  attack: 2,
  cost: 1,
  name: "Leper Gnome",
  text: "<b>Deathrattle:</b> Deal 2 damage to the enemy hero.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...LeperGnome };
  },
}

export default LeperGnome
