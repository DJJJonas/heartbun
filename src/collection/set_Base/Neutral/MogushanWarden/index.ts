import type ICard from "@/interfaces/card"

const MogushanWarden: ICard = {
  class: "neutral",
  rarity: "common",
  health: 7,
  attack: 1,
  cost: 4,
  name: "Mogu'shan Warden",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...MogushanWarden };
  },
}

export default MogushanWarden
