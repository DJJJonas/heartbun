import type ICard from "@/interfaces/card"

const RagingWorgen: ICard = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 3,
  cost: 3,
  name: "Raging Worgen",
  text: "<b>Enrage:</b> <b>Windfury</b> and +1 Attack",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...RagingWorgen };
  },
}

export default RagingWorgen
