import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  NAVBARTOGGLED,
  GET_MOVIEPICK,
  GET_MOVIEPICK_SUCCESS,
  GET_MOVIEPICK_ERROR,
} from "../types";

// export const setInfo = (name) => {
//   console.log("hello");
//   return {
//     type: t.SET_NAME,
//     payload: name,
//   };
// };

const navbarToggle = () => {
  return {
    type: NAVBARTOGGLED,
  };
};

const loadUsers = () => {
  console.log("object");
  return {
    type: GET_USERS,
  };
};

const setUsers = (users) => {
  console.log(users);
  return {
    type: GET_USERS_SUCCESS,
    users,
  };
};

const setError = (error) => ({
  type: GET_USERS_ERROR,
  error,
});

/// MOVIEPICK ONE

const getMoviePick = () => {
  console.log("action.js");
  return {
    type: GET_MOVIEPICK,
  };
};

const setMoviePick = (users) => {
  console.log(users, "action.js set");
  return {
    type: GET_MOVIEPICK_SUCCESS,
    users,
  };
};
const setErrorMoviePick = (error) => {
  console.log(error, "action.js error");
  return {
    type: GET_MOVIEPICK_ERROR,
    error,
  };
};

//////

export {
  loadUsers,
  setUsers,
  setError,
  navbarToggle,
  getMoviePick,
  setMoviePick,
  setErrorMoviePick,
};
