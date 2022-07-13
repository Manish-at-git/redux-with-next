import { put, call, takeEvery } from "redux-saga/effects";

import {
  setUsers,
  setError,
  setMoviePick,
  setErrorMoviePick,
  setMoviePickTwo,
  setErrorMoviePickTwo,
} from "../actions/main";
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_MOVIEPICK,
  GET_MOVIEPICK_TWO,
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
      "https://imdb-api.com/en/API/Top250Movies/k_pw119nae"
    );

    console.log(users.data, "sagaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    yield put(setMoviePick(users.data));
  } catch (error) {
    yield put(setErrorMoviePick(error.toString()));
    console.log(error, "serrorrrrrrrrrrrrrrrrrrrrrrr");
  }
}

export function* handleMoviePickLoadtwo() {
  try {
    const users = yield call(
      axios.get,
      "https://imdb-api.com/en/API/Top250TVs/k_pw119nae"
    );

    console.log(users.data, "sagaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    yield put(setMoviePickTwo(users.data));
  } catch (error) {
    yield put(setErrorMoviePickTwo(error.toString()));
    console.log(error, "serrorrrrrrrrrrrrrrrrrrrrrrr");
  }
}

export default function* watchImagesLoad() {
  // yield takeEvery(GET_USERS, handleImagesLoad);
  yield takeEvery(GET_MOVIEPICK, handleMoviePickLoad);
  yield takeEvery(GET_MOVIEPICK_TWO, handleMoviePickLoadtwo);
}
