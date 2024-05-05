import type { HeroClass } from "@/types";

export default interface HeroPower {
  cost?: number;
  name: string;
  text: string;
  class: HeroClass;
}
