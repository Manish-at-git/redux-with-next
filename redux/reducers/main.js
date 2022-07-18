import {
  NAVBARTOGGLED,
  GET_MOVIEPICK_SUCCESS,
  GET_MOVIEPICK_SUCCESS_TWO,
  GET_MOVIELIST_SUCCESS,
  GET_SINGLEMOVIE_SUCCESS,
  GET_SINGLEMOVIE_ERROR,
  GET_SEARCHMOVIE_SUCCESS,
  GET_SEARCHMOVIE_ERROR,
  GET_SEARCHMOVIE,
  SIGNIN,
  SIGNOUT,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  signIn: "",
  loading: false,
  navbarOpened: false,
  users: [],
  moviePick: [],
  moviePickTwo: [],
  movieList: [],
  singleMovie: { data: {}, images: {}, trailer: "" },
  search: { loading: false, searchResults: [] },
};

export default function (state = initialState, action) {
  console.log(action, "ACTIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN");
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
  else if (action.type === SIGNIN)
    return {
      ...state,
      signIn: action.email,
    };
  else if (action.type === SIGNOUT)
    return {
      ...state,
      signIn: "",
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
      singleMovie: {
        ...state.singleMovie,
        data: action.users.data,
        images: action.users.images,
        trailer: action.users.trailer,
      },
    };
  else if (action.type === GET_SEARCHMOVIE)
    return {
      ...state,
      search: {
        ...state.search,
        loading: true,
      },
    };
  else if (action.type === GET_SEARCHMOVIE_SUCCESS)
    return {
      ...state,
      search: {
        ...state.search,
        searchResults: action.users.results,
        loading: false,
      },
    };
  else {
    return state;
  }
}
