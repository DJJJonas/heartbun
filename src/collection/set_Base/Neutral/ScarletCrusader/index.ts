import type ICard from "@/interfaces/card"

const ScarletCrusader: ICard = {
  class: "neutral",
  rarity: "common",
  health: 1,
  attack: 3,
  cost: 3,
  name: "Scarlet Crusader",
  text: "<b>Divine Shield</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ScarletCrusader };
  },
}

export default ScarletCrusader
