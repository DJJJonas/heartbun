import type ICard from "@/interfaces/card"

const SenjinShieldmasta: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 5,
  attack: 3,
  cost: 4,
  name: "Sen'jin Shieldmasta",
  text: "<b>Taunt</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...SenjinShieldmasta };
  },
}

export default SenjinShieldmasta
