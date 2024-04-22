import type ICard from "@/interfaces/card"

const VoodooDoctor: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 2,
  cost: 1,
  name: "Voodoo Doctor",
  text: "<b>Battlecry:</b> Restore 2 Health.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...VoodooDoctor };
  },
}

export default VoodooDoctor
