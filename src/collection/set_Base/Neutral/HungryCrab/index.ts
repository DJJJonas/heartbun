import type Card from "@/interfaces/card"

const HungryCrab: Card = {
  class: "neutral",
  rarity: "epic",
  health: 2,
  attack: 1,
  cost: 1,
  name: "Hungry Crab",
  text: "<b>Battlecry:</b> Destroy a Murloc and gain +2/+2.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...HungryCrab };
  },
}

export default HungryCrab
