import { BUY_CHIPS, BUY_CHOCOLATE } from "./sweetsTypes";
export function buyChocolate() {
  return {
    type: BUY_CHOCOLATE,
    info: "buy Chocolate redux action",
  };
}

export function buyChips() {
  return {
    type: BUY_CHIPS,
    info: "buy Chips redux action",
  };
}
