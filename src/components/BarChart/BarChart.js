import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import weatherService from "../../service/weatherService";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "2rem auto"
  }
}));

const BarChartComp = ({ day, unit }) => {
  const classes = useStyles();
  const data = day.segments.map(item => ({
    name: item.hour,
    temp: weatherService.convertTempTo(unit, item.temp).toFixed(1)
  }));
  if (day)
    return (
      <BarChart width={730} height={250} className={classes.root} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="temp" fill="#0a2331" />
      </BarChart>
    );

  return "";
};

export default BarChartComp;
