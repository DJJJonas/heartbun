import type ICard from "@/interfaces/card"

const GelbinMekkatorque: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 6,
  attack: 6,
  cost: 6,
  name: "Gelbin Mekkatorque",
  text: "<b>Battlecry:</b> Summon an AWESOME invention.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...GelbinMekkatorque };
  },
}

export default GelbinMekkatorque
