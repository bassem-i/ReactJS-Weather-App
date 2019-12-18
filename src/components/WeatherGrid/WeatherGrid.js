import React from "react";
import Grid from "@material-ui/core/Grid";
import weatherService from "../../service/weatherService";

function WeatherGrid({ weatherData }) {
  const weatherInfo = weatherService.formatWeatherInfo(weatherData);

  return (
    <Grid item xs={12}>
      <Grid container justify="center" spacing={3}>
        {Object.keys(weatherInfo).map((key, i) => (
          <Grid key={i} item>
            <p>{key}</p>
            <p>{weatherInfo[key].weather}</p>
            <p>{weatherInfo[key].avgTemp.toFixed(1)}</p>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default WeatherGrid;
