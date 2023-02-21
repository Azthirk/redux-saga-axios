import { call, put, takeEvery } from "redux-saga/effects";
import { GET_INFO, GET_INFO_SUCCES } from "../actions";
import axios from "axios";

function* getInfo() {
  const { data } = yield call(axios.get, process.env.REACT_APP_API_BASE_URL);
  yield put({ type: GET_INFO_SUCCES, payload: data });
}

export default function* sagaMain() {
  yield takeEvery(GET_INFO, getInfo);
}
