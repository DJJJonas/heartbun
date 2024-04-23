import type ICard from "@/interfaces/card"

const Lightwarden: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 1,
  cost: 1,
  name: "Lightwarden",
  text: "Whenever a character is healed, gain +2 Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Lightwarden };
  },
}

export default Lightwarden
