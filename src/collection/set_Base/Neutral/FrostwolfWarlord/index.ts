import type ICard from "@/interfaces/card"

const FrostwolfWarlord: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 4,
  attack: 4,
  cost: 5,
  name: "Frostwolf Warlord",
  text: "<b>Battlecry:</b> Gain +1/+1 for each other friendly minion on the battlefield.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...FrostwolfWarlord };
  },
}

export default FrostwolfWarlord
