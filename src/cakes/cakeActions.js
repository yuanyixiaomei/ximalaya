import * as actions from "./cakeTypes";

export const buyCake = (number = 1) => {
  return {
    type: actions.BUY_CAKE,
    payload: number,
  };
};
