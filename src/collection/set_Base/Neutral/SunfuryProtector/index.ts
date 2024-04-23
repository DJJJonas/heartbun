import type ICard from "@/interfaces/card"

const SunfuryProtector: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 3,
  attack: 2,
  cost: 2,
  name: "Sunfury Protector",
  text: "<b>Battlecry:</b> Give adjacent minions <b>Taunt</b>.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SunfuryProtector };
  },
}

export default SunfuryProtector
