import constants from "./tradingConstants";

export function getData() {
  return {
    type: constants.GET_DATA
  };
}

export function saveBook(data) {
  return {
    type: constants.SAVE_BOOK,
    payload: data
  };
}

export function saveTicker(data) {
  return {
    type: constants.SAVE_TICKER,
    payload: data
  };
}

export function saveTrades(data) {
  return {
    type: constants.SAVE_TRADES,
    payload: data
  };
}
