import type Card from "@/interfaces/card"

const AncientWatcher: Card = {
  class: "neutral",
  rarity: "rare",
  health: 5,
  attack: 4,
  cost: 2,
  name: "Ancient Watcher",
  text: "Can't attack.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...AncientWatcher };
  },
}

export default AncientWatcher
