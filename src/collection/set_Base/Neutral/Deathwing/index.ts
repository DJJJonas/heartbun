import type Card from "@/interfaces/card"

const Deathwing: Card = {
  class: "neutral",
  rarity: "legendary",
  health: 12,
  attack: 12,
  cost: 10,
  name: "Deathwing",
  text: "<b>Battlecry:</b> Destroy all other minions and discard your hand.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Deathwing };
  },
}

export default Deathwing
