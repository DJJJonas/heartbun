import type ICard from "@/interfaces/card"

const EliteTaurenChieftain: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 5,
  attack: 5,
  cost: 5,
  name: "Elite Tauren Chieftain",
  text: "<b>Battlecry:</b> Give both players the power to ROCK! (with a Power Chord card)",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...EliteTaurenChieftain };
  },
}

export default EliteTaurenChieftain
