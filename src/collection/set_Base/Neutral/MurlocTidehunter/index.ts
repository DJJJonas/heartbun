import type ICard from "@/interfaces/card"

const MurlocTidehunter: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 2,
  cost: 2,
  name: "Murloc Tidehunter",
  text: "<b>Battlecry:</b> Summon a 1/1 Murloc Scout.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MurlocTidehunter };
  },
}

export default MurlocTidehunter
