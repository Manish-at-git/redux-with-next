import { put, call, takeEvery } from "redux-saga/effects";

import {
  setUsers,
  setError,
} from "../../../next-reduxSaga/redux/actions/userAction";
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from "../../../next-reduxSaga/redux/types";
import axios from "axios";

export function* handleImagesLoad() {
  try {
    const users = yield call(axios.get, "https://worldtimeapi.org/api/ip");
    console.log(users.data.datetime);
    yield put(setUsers(users.data.datetime));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(GET_USERS, handleImagesLoad);
}
