import type ICard from "@/interfaces/card"

const PintSizedSummoner: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 2,
  cost: 2,
  name: "Pint-Sized Summoner",
  text: "The first minion you play each turn costs (1) less.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...PintSizedSummoner };
  },
}

export default PintSizedSummoner
