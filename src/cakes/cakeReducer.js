import * as actions from "./cakeTypes";

const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
