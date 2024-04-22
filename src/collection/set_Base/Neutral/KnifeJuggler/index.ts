import type ICard from "@/interfaces/card"

const KnifeJuggler: ICard<"minion"> = {
  class: "neutral",
  rarity: "rare",
  health: 2,
  attack: 3,
  cost: 2,
  name: "Knife Juggler",
  text: "After you summon a minion, deal 1 damage to a random enemy.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...KnifeJuggler };
  },
}

export default KnifeJuggler
