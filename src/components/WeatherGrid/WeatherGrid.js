import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import weatherService from "../../service/weatherService";
import WeatherCard from "../WeatherCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "50%",
    margin: "2rem auto"
  }
}));

function WeatherGrid({ weatherData }) {
  const classes = useStyles();
  const weatherInfo = weatherService.formatWeatherInfo(weatherData);

  return (
    <Grid item xs={12} className={classes.root}>
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
