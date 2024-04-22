import type ICard from "@/interfaces/card"

const SilvermoonGuardian: ICard<"minion"> = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 3,
  cost: 4,
  name: "Silvermoon Guardian",
  text: "<b>Divine Shield</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SilvermoonGuardian };
  },
}

export default SilvermoonGuardian
