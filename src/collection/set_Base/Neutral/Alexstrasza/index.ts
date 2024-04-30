import type Card from "@/interfaces/card"

const Alexstrasza: Card = {
  class: "neutral",
  rarity: "legendary",
  health: 8,
  attack: 8,
  cost: 9,
  name: "Alexstrasza",
  text: "<b>Battlecry:</b> Set a hero's remaining Health to 15.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Alexstrasza };
  },
}

export default Alexstrasza
