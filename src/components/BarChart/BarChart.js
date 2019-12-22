import React from "react";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const BarChartComp = ({ day }) => {
  console.log(day);
  if (day)
    return (
      <BarChart width={730} height={250} data={day.tempArr}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    );

  return "";
};

export default BarChartComp;
