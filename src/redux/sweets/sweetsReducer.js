import { BUY_CHIPS, BUY_CHOCOLATE } from "./sweetsTypes";

const initialState = {
  numOfChips: 10,
  numOfChocolate: 20,
};

function sweetsReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CHIPS:
      return {
        ...state,
        numOfChips: state.numOfChips - 1,
      };
    case BUY_CHOCOLATE:
      return {
        ...state,
        numOfChocolate: state.numOfChocolate - 1,
      };
    default:
      return state;
  }
}
export default sweetsReducer;
