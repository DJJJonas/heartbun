import type ICard from "@/interfaces/card"

const StormwindChampion: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 6,
  attack: 6,
  cost: 7,
  name: "Stormwind Champion",
  text: "Your other minions have +1/+1.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...StormwindChampion };
  },
}

export default StormwindChampion
