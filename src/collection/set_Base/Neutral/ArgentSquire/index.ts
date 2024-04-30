import type Card from "@/interfaces/card"

const ArgentSquire: Card = {
  class: "neutral",
  rarity: "common",
  health: 1,
  attack: 1,
  cost: 1,
  name: "Argent Squire",
  text: "<b>Divine Shield</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ArgentSquire };
  },
}

export default ArgentSquire
