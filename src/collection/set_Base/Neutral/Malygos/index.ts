import type ICard from "@/interfaces/card"

const Malygos: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 12,
  attack: 4,
  cost: 9,
  name: "Malygos",
  text: "<b>Spell Damage +5</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Malygos };
  },
}

export default Malygos
