import {
  NAVBARTOGGLED,
  GET_MOVIEPICK_SUCCESS,
  GET_MOVIEPICK_SUCCESS_TWO,
  GET_MOVIELIST_SUCCESS,
  GET_SINGLEMOVIE_SUCCESS,
  GET_SINGLEMOVIE_ERROR,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  users: [],
  navbarOpened: false,
  moviePick: [],
  moviePickTwo: [],
  movieList: [],
  singleMovie: [],
};

export default function (state = initialState, action) {
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
  else if (action.type === GET_SINGLEMOVIE_SUCCESS)
    return {
      ...state,
      singleMovie: action.users,
    };
  else {
    return state;
  }
}
