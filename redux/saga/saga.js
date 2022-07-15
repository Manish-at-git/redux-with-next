import { put, call, takeEvery } from "redux-saga/effects";

import {
  setMoviePick,
  setErrorMoviePick,
  setMoviePickTwo,
  setErrorMoviePickTwo,
  setgetMovieList,
  setErrorgetMovieList,
} from "../actions/main";
import { GET_MOVIEPICK, GET_MOVIEPICK_TWO, GET_MOVIELIST } from "../types";
import axios from "axios";

export function* handleMoviePickLoad() {
  try {
    const users = yield call(
      axios.get,
      "https://imdb-api.com/en/API/Top250Movies/k_fulo16js"
    );

    yield put(setMoviePick(users.data));
  } catch (error) {
    yield put(setErrorMoviePick(error.toString()));
  }
}

export function* handleMoviePickLoadtwo() {
  try {
    const users = yield call(
      axios.get,
      "https://imdb-api.com/en/API/Top250TVs/k_fulo16js"
    );

    yield put(setMoviePickTwo(users.data));
  } catch (error) {
    yield put(setErrorMoviePickTwo(error.toString()));
  }
}

export function* handleMovieListLoad(action) {
  try {
    let url = action.MovieListPage;
    const users = yield call(
      axios.get,
      `https://imdb-api.com/en/API/${url}/k_fulo16js`
    );

    yield put(setgetMovieList(users.data));
  } catch (error) {
    yield put(setErrorgetMovieList(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(GET_MOVIEPICK, handleMoviePickLoad);
  yield takeEvery(GET_MOVIEPICK_TWO, handleMoviePickLoadtwo);
  yield takeEvery(GET_MOVIELIST, handleMovieListLoad);
}
