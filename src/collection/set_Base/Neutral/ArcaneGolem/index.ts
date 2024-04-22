import type ICard from "@/interfaces/card"

const ArcaneGolem: ICard<"minion"> = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 4,
  cost: 3,
  name: "Arcane Golem",
  text: "<b>Charge</b>. <b>Battlecry:</b> Give your opponent a Mana Crystal.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...ArcaneGolem };
  },
}

export default ArcaneGolem
