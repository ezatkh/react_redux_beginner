import { createStore } from "redux";
import sweetsReducer from "./sweets/sweetsReducer";
const store = createStore(sweetsReducer);
export default store;
