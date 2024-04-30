import type Card from "@/interfaces/card"

const RaidLeader: Card = {
  class: "neutral",
  rarity: undefined,
  health: 2,
  attack: 2,
  cost: 3,
  name: "Raid Leader",
  text: "Your other minions have +1 Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...RaidLeader };
  },
}

export default RaidLeader
