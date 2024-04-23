import type ICard from "@/interfaces/card"

const WarGolem: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 7,
  attack: 7,
  cost: 7,
  name: "War Golem",
  text: "",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...WarGolem };
  },
}

export default WarGolem
