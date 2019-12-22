import ApiService from "../service/apiService";
import weatherService from "../service/weatherService";
import WEATHER_ACTIONS from "./types";

function getWeatherInfo() {
  return dispatch => {
    dispatch({ type: WEATHER_ACTIONS.FETCH_REQUEST });
    ApiService.getWeatherInfo()
      .then(res => {
        dispatch({
          type: WEATHER_ACTIONS.FETCH_SUCCESS,
          payload: weatherService.formatWeatherInfo(res.data)
        });
      })
      .catch(err => {
        dispatch({ type: WEATHER_ACTIONS.FETCH_FAILURE, payload: err });
      });
  };
}

export default {
  getWeatherInfo
};
