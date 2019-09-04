import constants from "./tradingConstants";

const initialState = {
  trading: {
    book: {
      loss: [],
      gain: []
    },
    ticker: [],
    trades: []
  }
};

function tradingReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SAVE_BOOK:
      return {
        trading: {
          ...state.trading,
          book: {
            ...state.trading.book,
            ...action.payload
          }
        }
      };
    case constants.SAVE_TICKER:
      return {
        trading: {
          ...state.trading,
          ticker: action.payload
        }
      };
    case constants.SAVE_TRADES:
      return {
        trading: {
          ...state.trading,
          trades: action.payload
        }
      };
    case constants.SET_DATA:
    case constants.SET_BOOK:
    case constants.SET_TICKER:
    case constants.SET_TRADES:
    default:
      return state;
  }
}

export default tradingReducer;
