import axios from "axios";

const WeatherURL =
  "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c92 0aa6a85ad57&cnt=40";

function getWeatherInfo(onSuccess, onError) {
  axios
    .get(WeatherURL)
    .then(onSuccess)
    .catch(onError);
}

export default {
  getWeatherInfo
};
