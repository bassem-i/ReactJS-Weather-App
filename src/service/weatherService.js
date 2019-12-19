function formatWeatherInfo(weatherData) {
  let weatherMap = {};

  if (weatherData && weatherData.list)
    for (let i = 0; i < weatherData.list.length; i++) {
      const segment = weatherData.list[i];
      const date = segment.dt_txt.split(" ")[0];

      weatherMap[date] = {
        weather: segment.weather[0].main,
        tempArr: weatherMap[date] ? [...weatherMap[date].tempArr] : [],
        humidityArr: weatherMap[date] ? [...weatherMap[date].humidityArr] : []
      };
      weatherMap[date].tempArr.push(segment.main.temp);
      weatherMap[date].humidityArr.push(segment.main.humidity);
      weatherMap[date] = {
        ...weatherMap[date],
        avgTemp:
          weatherMap[date].tempArr.reduce((acc, item) => acc + item, 0) /
          weatherMap[date].tempArr.length,
        avgHumidity:
          weatherMap[date].humidityArr.reduce((acc, item) => acc + item, 0) /
          weatherMap[date].humidityArr.length
      };
    }

  return weatherMap;
}

export default {
  formatWeatherInfo
};
