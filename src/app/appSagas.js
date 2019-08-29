import { fork, all } from "redux-saga/effects";

import tradingSagas from "trading_app/src/core/trading/tradingSagas";

const sagas = [...tradingSagas];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
