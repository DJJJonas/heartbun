import type ICard from "@/interfaces/card"

const StonetuskBoar: ICard<"minion"> = {
  class: "neutral",
  rarity: undefined,
  health: 1,
  attack: 1,
  cost: 1,
  name: "Stonetusk Boar",
  text: "<b>Charge</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...StonetuskBoar };
  },
}

export default StonetuskBoar
