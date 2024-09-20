import Resources from "./Resources";

export default interface Improvement {
  type: string;
  level: number;
  cost: Resources;
  benefit: Resources;
}
