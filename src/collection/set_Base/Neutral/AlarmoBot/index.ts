import type ICard from "@/interfaces/card"

const AlarmoBot: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 3,
  attack: 0,
  cost: 3,
  name: "Alarm-o-Bot",
  text: "At the start of your turn, swap this minion with a random one in your hand.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...AlarmoBot };
  },
}

export default AlarmoBot
