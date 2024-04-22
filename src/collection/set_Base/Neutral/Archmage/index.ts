import type ICard from "@/interfaces/card"

const Archmage: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 7,
  attack: 4,
  cost: 6,
  name: "Archmage",
  text: "<b>Spell Damage +1</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Archmage };
  },
}

export default Archmage
