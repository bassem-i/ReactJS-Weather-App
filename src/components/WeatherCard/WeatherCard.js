import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import weatherService from "../../service/weatherService";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
});

const WeatherCard = ({ day, unit }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {day.date}
        </Typography>
        <Typography variant="h5" component="h2">
          {day.weather}
        </Typography>
        <Typography variant="body2" component="p">
          Avg Temp: {weatherService.convertTempTo(unit, day.avgTemp).toFixed(1)}{" "}
          {unit}
          <br />
          Avg Humidity: {day.avgHumidity}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
