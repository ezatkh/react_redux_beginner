import React from "react";
import Food from "./components/Food";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Food />
      </div>
    </Provider>
  );
}
export default App;
