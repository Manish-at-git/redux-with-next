import {
  NAVBARTOGGLED,
  GET_MOVIEPICK,
  GET_MOVIEPICK_SUCCESS,
  GET_MOVIEPICK_ERROR,
  GET_MOVIEPICK_TWO,
  GET_MOVIEPICK_SUCCESS_TWO,
  GET_MOVIEPICK_ERROR_TWO,
  GET_MOVIELIST,
  GET_MOVIELIST_SUCCESS,
  GET_MOVIELIST_ERROR,
} from "../types";

const navbarToggle = () => {
  return {
    type: NAVBARTOGGLED,
  };
};

/// MOVIEPICK ONE

const getMoviePick = () => {
  return {
    type: GET_MOVIEPICK,
  };
};

const setMoviePick = (users) => {
  return {
    type: GET_MOVIEPICK_SUCCESS,
    users,
  };
};
const setErrorMoviePick = (error) => {
  return {
    type: GET_MOVIEPICK_ERROR,
    error,
  };
};

//////

/// MOVIEPICK TWO

const getMoviePickTwo = () => {
  return {
    type: GET_MOVIEPICK_TWO,
  };
};

const setMoviePickTwo = (users) => {
  return {
    type: GET_MOVIEPICK_SUCCESS_TWO,
    users,
  };
};
const setErrorMoviePickTwo = (error) => {
  return {
    type: GET_MOVIEPICK_ERROR_TWO,
    error,
  };
};

//////

/// MOVIELIST

export const getMovieList = (MovieListPage) => {
  return {
    type: GET_MOVIELIST,
    MovieListPage,
  };
};

export const setgetMovieList = (users) => {
  return {
    type: GET_MOVIELIST_SUCCESS,
    users,
  };
};
export const setErrorgetMovieList = (error) => {
  return {
    type: GET_MOVIELIST_ERROR,
    error,
  };
};

//////

export {
  navbarToggle,
  getMoviePick,
  setMoviePick,
  setErrorMoviePick,
  getMoviePickTwo,
  setMoviePickTwo,
  setErrorMoviePickTwo,
};
