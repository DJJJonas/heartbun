import type Card from "@/interfaces/card"

const StranglethornTiger: Card = {
  class: "neutral",
  rarity: "common",
  health: 5,
  attack: 5,
  cost: 5,
  name: "Stranglethorn Tiger",
  text: "<b>Stealth</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...StranglethornTiger };
  },
}

export default StranglethornTiger
