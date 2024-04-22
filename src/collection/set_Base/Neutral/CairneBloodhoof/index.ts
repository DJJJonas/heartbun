import type ICard from "@/interfaces/card"

const CairneBloodhoof: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 5,
  attack: 4,
  cost: 6,
  name: "Cairne Bloodhoof",
  text: "<b>Deathrattle:</b> Summon a 4/5 Baine Bloodhoof.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...CairneBloodhoof };
  },
}

export default CairneBloodhoof
