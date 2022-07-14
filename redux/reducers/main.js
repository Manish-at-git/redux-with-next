import {
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  NAVBARTOGGLED,
  GET_MOVIEPICK_SUCCESS,
  GET_MOVIEPICK_SUCCESS_TWO,
  GET_MOVIELIST_SUCCESS,
  GET_MOVIELIST_ERROR,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  users: [],
  navbarOpened: false,
  moviePick: [],
  moviePickTwo: [],
  movieList: [],
};

export default function (state = initialState, action) {
  console.log(action, "action in reducer");
  console.log(state);

  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload.main, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else if (action.type === NAVBARTOGGLED)
    return {
      ...state,
      navbarOpened: !state.navbarOpened,
    };
  else if (action.type === GET_USERS_SUCCESS)
    return {
      ...state,
      users: [...action.users],
    };
  else if (action.type === GET_USERS_ERROR)
    return {
      error: action.payload,
    };
  else if (action.type === GET_MOVIEPICK_SUCCESS)
    return {
      ...state,
      moviePick: [...action.users.items],
    };
  else if (action.type === GET_MOVIEPICK_SUCCESS_TWO)
    return {
      ...state,
      moviePickTwo: [...action.users.items],
    };
  else if (action.type === GET_MOVIELIST_SUCCESS)
    return {
      ...state,
      movieList: [...action.users.items],
    };
  else {
    return state;
  }
}
