import type ICard from "@/interfaces/card"

const TheBeast: ICard = {
  class: "neutral",
  rarity: "legendary",
  health: 7,
  attack: 9,
  cost: 6,
  name: "The Beast",
  text: "<b>Deathrattle:</b> Summon a 3/3 Pip Quickwit for your opponent.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...TheBeast };
  },
}

export default TheBeast
