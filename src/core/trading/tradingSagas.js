import { call, delay, put, takeLatest } from "redux-saga/effects";

import * as api from "trading_app/src/services/api";

import constants from "./tradingConstants";
import * as actions from "./tradingActions";

function* getData() {
  const book = yield call(api.getBook);
  console.log("------------------------Book:", JSON.stringify(book));
  yield put(actions.saveBook(book));
  const ticker = yield call(api.getTicker);
  console.log("------------------------Ticker:", JSON.stringify(ticker));
  yield put(actions.saveTicker(ticker));
  const trades = yield call(api.getTrades);
  console.log("------------------------Trades:", JSON.stringify(trades));
  yield put(actions.saveTrades(trades));
  yield delay(1000);
  yield put(actions.getData());
}

function* watchGetPetition() {
  yield takeLatest(constants.GET_DATA, getData);
}

export default [watchGetPetition];
