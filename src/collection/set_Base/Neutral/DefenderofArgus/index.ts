import type ICard from "@/interfaces/card"

const DefenderofArgus: ICard<"minion"> = {
  class: "neutral",
  rarity: "rare",
  health: 3,
  attack: 2,
  cost: 4,
  name: "Defender of Argus",
  text: "<b>Battlecry:</b> Give adjacent minions +1/+1 and <b>Taunt</b>.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...DefenderofArgus };
  },
}

export default DefenderofArgus
