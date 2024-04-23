import type ICard from "@/interfaces/card"

const TwilightDrake: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 1,
  attack: 4,
  cost: 4,
  name: "Twilight Drake",
  text: "<b>Battlecry:</b> Gain +1 Health for each card in your hand.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...TwilightDrake };
  },
}

export default TwilightDrake
