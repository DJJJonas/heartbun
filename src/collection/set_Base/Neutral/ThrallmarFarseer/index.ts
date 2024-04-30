import type Card from "@/interfaces/card"

const ThrallmarFarseer: Card = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 2,
  cost: 3,
  name: "Thrallmar Farseer",
  text: "<b>Windfury</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ThrallmarFarseer };
  },
}

export default ThrallmarFarseer
