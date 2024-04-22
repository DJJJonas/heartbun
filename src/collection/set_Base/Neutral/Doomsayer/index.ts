import type ICard from "@/interfaces/card"

const Doomsayer: ICard<"minion"> = {
  class: "neutral",
  rarity: "epic",
  health: 7,
  attack: 0,
  cost: 2,
  name: "Doomsayer",
  text: "At the start of your turn, destroy ALL minions.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Doomsayer };
  },
}

export default Doomsayer
