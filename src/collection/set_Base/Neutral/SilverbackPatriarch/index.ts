import type ICard from "@/interfaces/card"

const SilverbackPatriarch: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 4,
  attack: 1,
  cost: 3,
  name: "Silverback Patriarch",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SilverbackPatriarch };
  },
}

export default SilverbackPatriarch
