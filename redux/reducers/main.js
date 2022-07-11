import { GET_USERS_SUCCESS, GET_USERS_ERROR } from "../types";

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  console.log(action);

  if (action.type === GET_USERS_SUCCESS)
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
