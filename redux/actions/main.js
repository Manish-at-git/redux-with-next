import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  NAVBARTOGGLED,
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

export { loadUsers, setUsers, setError, navbarToggle };
