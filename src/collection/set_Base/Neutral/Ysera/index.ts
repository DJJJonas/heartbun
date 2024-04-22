import type ICard from "@/interfaces/card";

const Ysera: ICard<"minion"> = {
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
