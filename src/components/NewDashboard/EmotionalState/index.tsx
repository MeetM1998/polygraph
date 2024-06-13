import React from "react";
import { Tooltip } from "@mui/material";
import { EventData } from "../../../Types/eventsDataTypes";
import ImformationIcon from "../../../assets//information.svg";
import RadarCharts from "../Graphs/RadarChart";
import "./EmotionalState.scss";

const longText = `In today’s world, where natural language processing has become ubiquitous, it is crucial to look beyond the mere words in order to gain a comprehensive understanding of a message. \n  
The idea of a primary set of emotions has been proposed by numerous psychologically researchers and is considered fundamental across cultures. It is important to note that these emotions are not entirely independent, and here can be complex interactions between them`;

const EmotionalState = (data: EventData) => {
  return (
    <div className="emotional-container">
      <div className="emotional">
        <p className="emotional-title">Emotional State of Leadership</p>
        <Tooltip
          title={longText.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        >
          <img src={ImformationIcon} alt="imformation" />
        </Tooltip>
      </div>
      <div className="emotional-graph">
        <p className="sub-title">Gerard Cassidy</p>
        <div className="spider-chart">
          <RadarCharts data={data} />
        </div>
      </div>
    </div>
  );
};

export default EmotionalState;
