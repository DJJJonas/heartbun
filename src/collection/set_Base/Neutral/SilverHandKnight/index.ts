import type ICard from "@/interfaces/card"

const SilverHandKnight: ICard<"minion"> = {
  class: "neutral",
  rarity: "common",
  health: 4,
  attack: 4,
  cost: 5,
  name: "Silver Hand Knight",
  text: "<b>Battlecry:</b> Summon a 2/2 Squire.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SilverHandKnight };
  },
}

export default SilverHandKnight
