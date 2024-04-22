import type ICard from "@/interfaces/card"

const CaptainGreenskin: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 4,
  attack: 5,
  cost: 5,
  name: "Captain Greenskin",
  text: "<b>Battlecry:</b> Give your weapon +1/+1.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...CaptainGreenskin };
  },
}

export default CaptainGreenskin
