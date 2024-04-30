import type Card from "@/interfaces/card"

const TinkmasterOverspark: Card = {
  class: "neutral",
  rarity: "legendary",
  health: 3,
  attack: 3,
  cost: 3,
  name: "Tinkmaster Overspark",
  text: "<b>Battlecry:</b> Transform another random minion into a 5/5 Devilsaur or a 1/1 Squirrel.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...TinkmasterOverspark };
  },
}

export default TinkmasterOverspark
