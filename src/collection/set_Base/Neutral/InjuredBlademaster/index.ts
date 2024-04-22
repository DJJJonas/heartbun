import type ICard from "@/interfaces/card"

const InjuredBlademaster: ICard<"minion"> = {
  class: "neutral",
  rarity: "rare",
  health: 7,
  attack: 4,
  cost: 3,
  name: "Injured Blademaster",
  text: "<b>Battlecry:</b> Deal 4 damage to HIMSELF.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...InjuredBlademaster };
  },
}

export default InjuredBlademaster
