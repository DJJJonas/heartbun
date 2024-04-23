import type ICard from "@/interfaces/card"

const KoboldGeomancer: ICard = {
  class: "neutral",
  rarity: undefined,
  health: 2,
  attack: 2,
  cost: 2,
  name: "Kobold Geomancer",
  text: "<b>Spell Damage +1</b>",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...KoboldGeomancer };
  },
}

export default KoboldGeomancer
