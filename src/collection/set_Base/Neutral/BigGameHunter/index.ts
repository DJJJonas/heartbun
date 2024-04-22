import type ICard from "@/interfaces/card"

const BigGameHunter: ICard<"minion"> = {
  class: "neutral",
  rarity: "epic",
  health: 2,
  attack: 4,
  cost: 3,
  name: "Big Game Hunter",
  text: "<b>Battlecry:</b> Destroy a minion with 7 or more Attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...BigGameHunter };
  },
}

export default BigGameHunter
