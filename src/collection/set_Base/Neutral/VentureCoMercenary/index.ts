import type ICard from "@/interfaces/card"

const VentureCoMercenary: ICard<"minion"> = {
  class: "neutral",
  rarity: "common",
  health: 6,
  attack: 7,
  cost: 5,
  name: "Venture Co. Mercenary",
  text: "Your minions cost (3) more.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...VentureCoMercenary };
  },
}

export default VentureCoMercenary
