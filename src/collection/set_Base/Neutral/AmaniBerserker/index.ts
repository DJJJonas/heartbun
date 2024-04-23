import type ICard from "@/interfaces/card"

const AmaniBerserker: ICard = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 2,
  cost: 2,
  name: "Amani Berserker",
  text: "<b>Enrage:</b> +3 Attack",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...AmaniBerserker };
  },
}

export default AmaniBerserker
