import type ICard from "@/interfaces/card"

const SpitefulSmith: ICard<"minion"> = {
  class: "neutral",
  rarity: "common",
  health: 6,
  attack: 4,
  cost: 5,
  name: "Spiteful Smith",
  text: "<b>Enrage:</b> Your weapon has +2 Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SpitefulSmith };
  },
}

export default SpitefulSmith
