import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const RadarCharts = ({ data }: any) => {
  return (
    <RadarChart
      outerRadius={90}
      width={400}
      height={400}
      data={data?.radar_graph_data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis angle={90} />
      <Radar
        name="Values"
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default RadarCharts;
