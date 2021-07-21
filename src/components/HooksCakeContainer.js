import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../cakes/cakeActions";

function HooksCakeContainer(params) {
  const numCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes : {numCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
