import WEATHER_ACTIONS from "../actions/types";

const initialState = {
  pending: false,
  data: [],
  err: {}
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case WEATHER_ACTIONS.FETCH_REQUEST:
      return {
        ...state,
        pending: true
      };
    case WEATHER_ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      };
    case WEATHER_ACTIONS.FETCH_FAILURE:
      return {
        ...state,
        pending: false,
        err: action.payload
      };
    default:
      return state;
  }
}
