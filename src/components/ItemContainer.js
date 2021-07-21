import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake } from "../cakes/cakeActions";
import { buyIceCream } from "../iceCream/iceCreamActions";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <div>
        <button onClick={props.buyItem}>Buy Items</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispactchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispactchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
