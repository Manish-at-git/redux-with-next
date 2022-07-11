import { put, call, takeEvery } from "redux-saga/effects";

import { setUsers, setError } from "../actions/main";
import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR } from "../types";
import axios from "axios";

export function* handleImagesLoad() {
  try {
    const users = yield call(axios.get, "https://worldtimeapi.org/api/ip");

    yield put(setUsers(users.data.datetime));
    console.log(users.data.datetime);
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(GET_USERS, handleImagesLoad);
}
