import React from "react";
import { Tooltip } from "@mui/material";
import { EventData } from "../../../Types/eventsDataTypes";
import CenterLine from "../../../assets/centerline.svg";
import InformationIcon from "../../../assets/information.svg";
import Percentage from "../../../assets/percentage.svg";
import Star from "../../../assets/star.svg";
import HeatmapPlot from "../Graphs/HeatmapGraph";
import "./Divergance.scss";

const AiAssesment = [
  { image: Star, title: "ABOVE AVERAGE" },
  { image: CenterLine, title: "CONSISTENCY VS PREVIOUS" },
  { image: CenterLine, title: "EVENT CONSISTENCY VS COMPETITORS" },
  { image: Percentage, title: "CONFIDENCE OF MEASUREMENT" },
];

const Legends = [
  {
    text: "DIVERGENCE",
    image: InformationIcon,
    tooltip:
      "Word choice and tonal properties are at odds regarding future firm performance",
  },
  {
    text: "CONSISTENCY",
    image: InformationIcon,
    tooltip:
      "Word choice and tonal properties closely align regarding future firm performance",
  },
  {
    text: "CALL ANALYSIS",
    image: InformationIcon,
    tooltip:
      "Forecasted firm performance based on divergence. Circle size grows in relation to the speaker’s confidence level.",
  },
];

const longText = `Divergence criteria refers to the observation of changes in an executive’s tone or language used, indicating trends or issues that are not explicitly disclosed. For instance, a shift in tone or increased use of cautious language could signal potential concerns about future performance even if the eported numbers seem robust. \n 
Inconsistencies between what is explicitly stated in words and what is subtly conveyed in tone are valuable pieces of information.It can provide unique insights into the state of the company, revealing risks or opportunities that others overlook.Think of it as an additional layer of due diligence that helps us make more informed investment decisions.`;

const Divergance = (data: EventData) => {
  return (
    <div className="divergence-content">
      <div className="divergence-container">
        <p className="divergence-title">Divergence Criteria</p>
        <Tooltip
          title={longText.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        >
          <img src={InformationIcon} alt="imformation" />
        </Tooltip>
      </div>
      <div className="heatmap-container">
        <div className="heatmap-graph">
          <div className="graph">
            <HeatmapPlot scatterData={data} />
          </div>
          <div className="legends-container">
            {Legends.map((item, index) => (
              <div className="legend-title" key={index}>
                {item.text}{" "}
                <Tooltip title={item.tooltip}>
                  <img src={item?.image} alt="imformation" />
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
        <div className="ai-assesment">
          <div className="assesment-title">
            <p>AI Assessment</p>
          </div>
          <div className="assesment-key-highlight">
            {AiAssesment.map((item, index) => (
              <div className="keys" key={index}>
                <img src={item?.image} alt="images" />
                <p>{item?.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divergance;
