import { GET_USERS_SUCCESS, GET_USERS_ERROR } from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  console.log(action);
  console.log(state);

  if (action.type === HYDRATE) {
    console.log(action.payload, "action.users");
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else if (action.type === GET_USERS_SUCCESS)
    return {
      ...state,
      users: action.users,
    };
  else if (action.type === GET_USERS_ERROR)
    return {
      error: action.payload,
    };
  else {
    return state;
  }
}
