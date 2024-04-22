import type ICard from "@/interfaces/card"

const Sunwalker: ICard<"minion"> = {
  class: "neutral",
  rarity: "rare",
  health: 5,
  attack: 4,
  cost: 6,
  name: "Sunwalker",
  text: "<b>Taunt</b> <b>Divine Shield</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Sunwalker };
  },
}

export default Sunwalker
