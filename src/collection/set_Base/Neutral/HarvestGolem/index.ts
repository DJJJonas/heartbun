import type ICard from "@/interfaces/card"

const HarvestGolem: ICard<"minion"> = {
  class: "neutral",
  rarity: "common",
  health: 3,
  attack: 2,
  cost: 3,
  name: "Harvest Golem",
  text: "<b>Deathrattle:</b> Summon a 2/1 Damaged Golem.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...HarvestGolem };
  },
}

export default HarvestGolem
