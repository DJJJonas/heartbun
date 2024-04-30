import type Card from "@/interfaces/card"

const LeeroyJenkins: Card = {
  class: "neutral",
  rarity: "legendary",
  health: 2,
  attack: 6,
  cost: 4,
  name: "Leeroy Jenkins",
  text: "<b>Charge</b>. <b>Battlecry:</b> Summon two 1/1 Whelps for your opponent.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...LeeroyJenkins };
  },
}

export default LeeroyJenkins
