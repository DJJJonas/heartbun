import type ICard from "@/interfaces/card"

const AngryChicken: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 1,
  attack: 1,
  cost: 1,
  name: "Angry Chicken",
  text: "<b>Enrage:</b> +5 Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...AngryChicken };
  },
}

export default AngryChicken
