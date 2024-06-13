import React from "react";
import { BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";

const CallDurationChart = ({ data }: any) => {
  const prValueInMinutes = Math.floor(data?.duration_pr / 60);
  const prValueInSeconds = Math.floor(data?.duration_pr % 60);
  const qaValueInMinutes = Math.floor(data?.duration_qa / 60);
  const qaValueInSeconds = Math.floor(data?.duration_qa % 60);

  const Data = [
    {
      name: "Category A",
      value1: prValueInMinutes,
      value2: qaValueInMinutes,
    },
  ];

  return (
    <BarChart width={450} height={60} data={Data} layout="vertical">
      {/* Hide X Axis */}
      <XAxis type="number" display="none" />

      {/* Hide Y Axis */}
      <YAxis dataKey="name" type="category" display="none" />

      <Bar
        dataKey="value1"
        stackId="a"
        fill="rgba(0, 0, 0, 0)"
        stroke="#5BEEF7"
        strokeWidth={2}
        barSize={20}
      >
        <LabelList
          dataKey="value1"
          position="bottom"
          style={{ fill: "white", fontSize: "20px" }}
          formatter={(value: any) =>
            `PR : ${value} min, ${prValueInSeconds} sec`
          }
        />
      </Bar>
      <Bar
        dataKey="value2"
        stackId="a"
        fill="rgba(0, 0, 0, 0)"
        stroke="#FE912C"
        strokeWidth={2}
        barSize={20}
      >
        <LabelList
          dataKey="value2"
          position="bottom"
          style={{ fill: "white", fontSize: "20px" }}
          formatter={(value: any) =>
            `QA : ${value} min, ${qaValueInSeconds} sec`
          }
        />
      </Bar>
    </BarChart>
  );
};

export default CallDurationChart;
