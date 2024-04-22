import type ICard from "@/interfaces/card"

const DarkscaleHealer: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 5,
  attack: 4,
  cost: 5,
  name: "Darkscale Healer",
  text: "<b>Battlecry:</b> Restore 2 Health to all friendly characters.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...DarkscaleHealer };
  },
}

export default DarkscaleHealer
