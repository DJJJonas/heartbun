import type Card from "@/interfaces/card"

const SeaGiant: Card = {
  class: "neutral",
  rarity: "epic",
  health: 8,
  attack: 8,
  cost: 10,
  name: "Sea Giant",
  text: "Costs (1) less for each other minion on the battlefield.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SeaGiant };
  },
}

export default SeaGiant
