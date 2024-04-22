import type ICard from "@/interfaces/card"

const EarthenRingFarseer: ICard<"minion"> = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 3,
  cost: 3,
  name: "Earthen Ring Farseer",
  text: "<b>Battlecry:</b> Restore 3 Health.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...EarthenRingFarseer };
  },
}

export default EarthenRingFarseer
