import React from "react";
import Grid from "@material-ui/core/Grid";
import weatherService from "../../service/weatherService";
import WeatherCard from "../WeatherCard";

function WeatherGrid({ weatherData }) {
  const weatherInfo = weatherService.formatWeatherInfo(weatherData);

  return (
    <Grid item xs={12}>
      <Grid container justify="center" spacing={3}>
        {Object.keys(weatherInfo).map((key, i) => (
          <Grid key={i} item>
            <WeatherCard date={key} weather={weatherInfo[key]} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default WeatherGrid;
