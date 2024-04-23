import type ICard from "@/interfaces/card"

const GadgetzanAuctioneer: ICard = {
  class: "neutral",
  rarity: "rare",
  health: 4,
  attack: 4,
  cost: 5,
  name: "Gadgetzan Auctioneer",
  text: "Whenever you cast a spell, draw a card.",
  type: "minion",
  portrait: "",
  copy: () => {
    return { ...GadgetzanAuctioneer };
  },
}

export default GadgetzanAuctioneer
