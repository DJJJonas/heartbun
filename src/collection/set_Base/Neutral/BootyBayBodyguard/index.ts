import type ICard from "@/interfaces/card"

const BootyBayBodyguard: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 4,
  attack: 5,
  cost: 5,
  name: "Booty Bay Bodyguard",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...BootyBayBodyguard };
  },
}

export default BootyBayBodyguard
