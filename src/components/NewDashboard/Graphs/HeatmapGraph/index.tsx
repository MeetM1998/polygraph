import React from "react";
import Plot from "react-plotly.js";
import { times, random } from "lodash";
import { Data } from "plotly.js";

interface HeatmapAnnotation {
  x: number;
  y: number;
  xref: string;
  yref: string;
  text: string;
  showarrow: boolean;
  font: {
    size: number;
    color: string;
  };
}

const generateRandomData = (rows: number, columns: number): number[][] => {
  return times(rows, () => times(columns, () => random(1, 20)));
};

const HeatmapPlot = ({ scatterData }: any) => {
  const randomData: number[][] = generateRandomData(4, 5);
  const origin = scatterData?.scatter_data[0];
  let rx_start = origin.x - origin.x_std + 1;
  let rx_end = origin.x + origin.x_std + 3;
  let rx = rx_end - rx_start;

  let ry_start = origin.x - origin.y_std + 1;
  let ry_end = origin.x + origin.y_std + 2;
  let ry = ry_end - ry_start;

  const data: Data[] = [
    {
      z: randomData,
      type: "heatmapgl",
      connectgaps: false,
      colorscale: [
        [0, "#A3F7BB"],
        [1, "#FF4719"],
      ],
      showscale: false,
      hoverinfo: "none",
    },
  ];

  const annotations: HeatmapAnnotation[] = [
    {
      x: rx,
      y: ry,
      xref: "x",
      yref: "y",
      text: "\u2B24", // Unicode character for a filled circle
      showarrow: false,
      font: {
        size: 16,
        color: "black",
      },
    },
  ];

  // Layout settings
  const layout: any = {
    annotations: annotations,
    xaxis: {
      tickvals: [],
      showticklabels: false,
      dragmode: false,
    },
    yaxis: {
      tickvals: [],
      showticklabels: false,
      dragmode: false,
    },
  };

  const config: any = {
    displayModeBar: false,
    showAxisDragHandles: false,
  };

  return <Plot data={data} layout={layout} config={config} />;
};

export default HeatmapPlot;
