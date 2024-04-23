import type ICard from "@/interfaces/card"

const CaptainsParrot: ICard = {
  class: "neutral",
  rarity: "epic",
  health: 1,
  attack: 1,
  cost: 2,
  name: "Captain's Parrot",
  text: "<b>Battlecry:</b> Draw a Pirate from your deck.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...CaptainsParrot };
  },
}

export default CaptainsParrot
