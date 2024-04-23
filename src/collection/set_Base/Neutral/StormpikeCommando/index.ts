import type ICard from "@/interfaces/card"

const StormpikeCommando: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 2,
  attack: 4,
  cost: 5,
  name: "Stormpike Commando",
  text: "<b>Battlecry:</b> Deal 2 damage.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...StormpikeCommando };
  },
}

export default StormpikeCommando
