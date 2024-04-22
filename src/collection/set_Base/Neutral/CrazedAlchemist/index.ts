import type ICard from "@/interfaces/card"

const CrazedAlchemist: ICard<"minion"> = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 2,
  cost: 2,
  name: "Crazed Alchemist",
  text: "<b>Battlecry:</b> Swap the Attack and Health of a minion.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...CrazedAlchemist };
  },
}

export default CrazedAlchemist
