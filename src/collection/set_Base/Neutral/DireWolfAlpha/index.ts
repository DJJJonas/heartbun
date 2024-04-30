import type Card from "@/interfaces/card"

const DireWolfAlpha: Card = {
  class: "neutral",
  rarity: "common",
  health: 2,
  attack: 2,
  cost: 2,
  name: "Dire Wolf Alpha",
  text: "Adjacent minions have +1 Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...DireWolfAlpha };
  },
}

export default DireWolfAlpha
