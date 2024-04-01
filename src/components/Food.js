import React from "react";
import { buyChips, buyChocolate } from "../redux/index";
import { connect } from "react-redux";
function Food(props) {
  return (
    <div className="App">
      <p>Number of Chips: {props.numOfChips}</p>
      <button onClick={props.buyChips}>Buy Chips</button>
      <p>Number of Chocolate:{props.numOfChocolate}</p>
      <button onClick={props.buyChocolate}>Buy Chocolate</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfChips: state.numOfChips,
    numOfChocolate: state.numOfChocolate,
  };
};
const mapDispatchToProps = (dipatch) => {
  return {
    buyChocolate: () => dipatch(buyChocolate()),
    buyChips: () => dipatch(buyChips()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Food);
