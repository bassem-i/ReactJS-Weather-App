function formatWeatherInfo(weatherData) {
  const formattedWeatherData = [];

  // Fromat the response to be an array of days instead
  for (let i = 0; i < weatherData.list.length; i++) {
    const segment = weatherData.list[i];
    const date = segment.dt_txt.split(" ")[0];
    const hour = segment.dt_txt.split(" ")[1];

    const day = formattedWeatherData.find(item => item.date === date);
    if (day) {
      day.segments.push({
        hour: hour,
        temp: segment.main.temp,
        humidity: segment.main.humidity
      });
    } else {
      formattedWeatherData.push({
        date: date,
        weather: segment.weather[0].main,
        segments: [
          {
            hour: hour,
            temp: segment.main.temp,
            humidity: segment.main.humidity
          }
        ]
      });
    }
  }

  // Compute the average temperature & humidity
  formattedWeatherData.forEach(day => {
    day.avgTemp = (
      day.segments.reduce((acc, item) => acc + item.temp, 0) /
      day.segments.length
    ).toFixed(1);
    day.avgHumidity = (
      day.segments.reduce((acc, item) => acc + item.humidity, 0) /
      day.segments.length
    ).toFixed(1);
  });

  return formattedWeatherData;
}

function convertTempTo(unit, value) {
  if (unit === "Fahrenheit") {
    return (value - 273.15) * 1.8 + 32;
  }
  if (unit === "Celcius") {
    return value - 273.15;
  }

  return value;
}

export default {
  formatWeatherInfo,
  convertTempTo
};
