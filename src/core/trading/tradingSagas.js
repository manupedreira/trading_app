import { put, select, takeEvery, takeLatest } from "redux-saga/effects";

import constants from "./tradingConstants";
import * as actions from "./tradingActions";

function* setData({ payload }) {
  switch (payload.channel) {
    case "book":
      yield put(actions.setBook(payload.data));
      break;
    case "ticker":
      yield put(actions.setTicker(payload.data));
      break;
    case "trades":
      yield put(actions.setTrades(payload.data));
      break;
    default:
      return;
  }
}

function* setBook({ payload }) {
  const { loss, gain } = yield select(state => state.trading.book);
  let newLoss = null;
  let newGain = null;

  switch (typeof payload[0]) {
    case "number":
      payload[2] >= 0
        ? (newGain = [payload, ...gain])
        : (newLoss = [payload, ...loss]);
      break;
    case "object":
      newGain = [...gain];
      newLoss = [...loss];
      yield payload.reverse().forEach(transaction => {
        transaction[2] >= 0
          ? (newGain = [transaction, ...newGain])
          : (newLoss = [transaction, ...newLoss]);
      });
      break;
    default:
      return;
  }

  const newBook = {};

  if (!!newLoss) {
    newBook.loss = newLoss.length > 24 ? newLoss.slice(0, 24) : newLoss;
  }

  if (!!newGain) {
    newBook.gain = newGain.length > 24 ? newGain.slice(0, 24) : newGain;
  }

  yield put(actions.saveBook(newBook));
}

function* setTicker({ payload }) {
  yield put(actions.saveTicker(payload));
}

function* setTrades({ payload }) {
  const trades = yield select(state => state.trading.trades);
  let newTrades = [];

  switch (typeof payload[0]) {
    case "number":
      newTrades = [payload, ...trades];
      break;
    case "object":
      newTrades = [...payload, ...trades];
      break;
    default:
      return;
  }

  yield put(
    actions.saveTrades(
      newTrades.length > 24 ? newTrades.slice(0, 24) : newTrades
    )
  );
}

function* watchGetPetition() {
  yield takeEvery(constants.SET_DATA, setData);
}

function* watchSetBook() {
  yield takeLatest(constants.SET_BOOK, setBook);
}

function* watchSetTicker() {
  yield takeLatest(constants.SET_TICKER, setTicker);
}

function* watchSetTrades() {
  yield takeLatest(constants.SET_TRADES, setTrades);
}

export default [watchGetPetition, watchSetBook, watchSetTicker, watchSetTrades];
