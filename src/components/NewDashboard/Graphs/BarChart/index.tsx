import React from "react";
import { Bar, BarChart as RechartsBarChart, XAxis } from "recharts";

interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
  color: string;
}

const data: DataItem[] = Array.from({ length: 18 }, (_, index) => ({
  name: `Page ${index + 1}`,
  uv: Math.floor(Math.random() * 5000),
  pv: Math.floor(Math.random() * 5000),
  amt: Math.floor(Math.random() * 5000),
  color: index % 2 === 0 ? "#5BEEF7" : "#FFCE20",
}));

const BarCharts = () => {
  return (
    <RechartsBarChart width={500} height={300} data={data}>
      <XAxis dataKey="name" tick={false} />
      <Bar dataKey="uv" fill="#5BEEF7" />
      <Bar dataKey="pv" fill="#FFCE20" />
    </RechartsBarChart>
  );
};

export default BarCharts;
