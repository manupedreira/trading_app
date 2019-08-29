import constants from "./tradingConstants";

const initialState = {
  trading: {
    book: [],
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
          book: action.payload
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
    case constants.GET_DATA:
    default:
      return state;
  }
}

export default tradingReducer;
