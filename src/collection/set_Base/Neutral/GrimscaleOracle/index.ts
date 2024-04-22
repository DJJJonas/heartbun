import type ICard from "@/interfaces/card"

const GrimscaleOracle: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 1,
  cost: 1,
  name: "Grimscale Oracle",
  text: "ALL other Murlocs have +1 Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...GrimscaleOracle };
  },
}

export default GrimscaleOracle
