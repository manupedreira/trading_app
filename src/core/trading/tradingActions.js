import constants from "./tradingConstants";

export function setData(data) {
  return {
    type: constants.SET_DATA,
    payload: data
  };
}

export function setBook(data) {
  return {
    type: constants.SET_BOOK,
    payload: data
  };
}

export function setTicker(data) {
  return {
    type: constants.SET_TICKER,
    payload: data
  };
}

export function setTrades(data) {
  return {
    type: constants.SET_TRADES,
    payload: data
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
