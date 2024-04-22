import type ICard from "@/interfaces/card"

const ManaWraith: ICard<"minion"> = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 2,
  cost: 2,
  name: "Mana Wraith",
  text: "ALL minions cost (1) more.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ManaWraith };
  },
}

export default ManaWraith
