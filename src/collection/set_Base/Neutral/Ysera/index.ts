import type Card from "@/interfaces/card";

const Ysera: Card = {
  class: "neutral",
  rarity: "legendary",
  health: 12,
  attack: 4,
  cost: 9,
  name: "Ysera",
  text: "At the end of your turn, add a Dream Card to your hand.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...Ysera };
  },
};

export default Ysera;
