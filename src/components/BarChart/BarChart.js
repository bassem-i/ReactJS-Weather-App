import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";
import weatherService from "../../service/weatherService";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "0 auto"
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
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer
          className={classes.container}
          height="80%"
          width={700}
        >
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="temp" fill="#0a2331" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );

  return "";
};

export default BarChartComp;
