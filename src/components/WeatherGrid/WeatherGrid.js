import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { Grid, Button, Radio, FormControlLabel } from "@material-ui/core";
import weatherService from "../../service/weatherService";
import WeatherCard from "../WeatherCard";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "2rem auto"
  },
  grid: {
    padding: "2rem 0"
  }
}));

const PAGE_SIZE = 3;
function WeatherGrid({ weatherData }) {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const [tempUnit, setTempUnit] = React.useState("Fahrenheit");
  const weatherInfo = weatherService.formatWeatherInfo(weatherData);

  return (
    <Grid item xs={12} className={classes.root}>
      <Grid container justify="center" spacing={10} className={classes.grid}>
        <Grid item>
          <FormControlLabel
            value="Celcius"
            label="Celcius"
            control={
              <Radio
                value="Celcius"
                checked={tempUnit === "Celcius"}
                onChange={e => setTempUnit(e.target.value)}
                inputProps={{ "aria-label": "B" }}
              />
            }
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value="Fahrenheit"
            label="Fahrenheit"
            control={
              <Radio
                value="Fahrenheit"
                checked={tempUnit === "Fahrenheit"}
                onChange={e => setTempUnit(e.target.value)}
                inputProps={{ "aria-label": "A" }}
              />
            }
          />
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={10} className={classes.grid}>
        <Grid item>
          <Button onClick={() => setOffset(offset - 1)} disabled={offset === 0}>
            <ArrowBack fontSize="large" />
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setOffset(offset + 1)}
            disabled={offset + PAGE_SIZE === Object.keys(weatherInfo).length}
          >
            <ArrowForward fontSize="large" />
          </Button>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={3} className={classes.grid}>
        {Object.keys(weatherInfo)
          .slice(offset, offset + PAGE_SIZE)
          .map((key, i) => (
            <Grid key={i} item>
              <WeatherCard
                date={key}
                unit={tempUnit}
                weather={weatherInfo[key]}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}

export default WeatherGrid;
