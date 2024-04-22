import type ICard from "@/interfaces/card"

const OldMurkEye: ICard<"minion"> = {
  class: "neutral",
  rarity: "legendary",
  health: 4,
  attack: 2,
  cost: 4,
  name: "Old Murk-Eye",
  text: "<b>Charge</b>. Has +1 Attack for each other Murloc on the battlefield.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...OldMurkEye };
  },
}

export default OldMurkEye
