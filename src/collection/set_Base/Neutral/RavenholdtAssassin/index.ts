import type ICard from "@/interfaces/card"

const RavenholdtAssassin: ICard<"minion"> = {
  class: "neutral",
  rarity: "rare",
  health: 5,
  attack: 7,
  cost: 7,
  name: "Ravenholdt Assassin",
  text: "<b>Stealth</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...RavenholdtAssassin };
  },
}

export default RavenholdtAssassin
