import type Card from "@/interfaces/card"

const DarkIronDwarf: Card = {
  class: "neutral",
  rarity: "common",
  health: 4,
  attack: 4,
  cost: 4,
  name: "Dark Iron Dwarf",
  text: "<b>Battlecry:</b> Give a minion +2 Attack this turn.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...DarkIronDwarf };
  },
}

export default DarkIronDwarf
