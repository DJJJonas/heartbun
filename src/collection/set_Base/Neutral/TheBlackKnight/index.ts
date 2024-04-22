import type ICard from "@/interfaces/card"

const TheBlackKnight: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 5,
  attack: 4,
  cost: 6,
  name: "The Black Knight",
  text: "<b>Battlecry:</b> Destroy an enemy minion with <b>Taunt</b>.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...TheBlackKnight };
  },
}

export default TheBlackKnight
