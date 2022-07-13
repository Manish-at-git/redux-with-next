import { put, call, takeEvery } from "redux-saga/effects";

import {
  setUsers,
  setError,
  setMoviePick,
  setErrorMoviePick,
} from "../actions/main";
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_MOVIEPICK,
} from "../types";
import axios from "axios";

// export function* handleImagesLoad() {
//   try {
//     const users = yield call(
//       axios.get,
//       "https://jsonplaceholder.typicode.com/users"
//     );

//     yield put(setUsers(users.data));
//     console.log(users.data, "sagaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//   } catch (error) {
//     yield put(setError(error.toString()));
//   }
// }

export function* handleMoviePickLoad() {
  try {
    const users = yield call(
      axios.get,
      "https://imdb-api.com/en/API/Top250Movies/k_nrcppo4w"
    );

    console.log(users.data, "sagaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    yield put(setMoviePick(users.data));
  } catch (error) {
    yield put(setErrorMoviePick(error.toString()));
    console.log(error, "serrorrrrrrrrrrrrrrrrrrrrrrr");
  }
}

export default function* watchImagesLoad() {
  // yield takeEvery(GET_USERS, handleImagesLoad);
  yield takeEvery(GET_MOVIEPICK, handleMoviePickLoad);
}
