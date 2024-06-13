import { useMemo } from "react";
import { EventData } from "../../../Types/eventsDataTypes";
import DownArrowIcon from "../../../assets/down-arrow.svg";
import BarCharts from "../Graphs/BarChart";
import CallDurationChart from "../Graphs/CallDuration";
import CustomizedRating from "./CustomRatting";
import "./RiskCallAudio.scss";

const RiskCallAudio = (data: EventData) => {
  const callDuration = useMemo(
    () =>
      `${(Math.floor(data.duration_qa + data.duration_pr) / 60).toFixed(
        0
      )} Minutes ${
        Math.floor(data.duration_qa + data.duration_pr) % 60
      } Seconds`,
    [data]
  );

  return (
    <div className="risk-call-audio-container">
      <div className="risk-container">
        <p className="title">Risk and Deception Score</p>
        <div className="risk">
          <CustomizedRating />
          <div className="risk-level-since">
            <img src={DownArrowIcon} alt="down" />
            <p className="risk-level-title">
              Risk level down since February 28, 2023
            </p>
          </div>
        </div>
      </div>
      <div className="call-container">
        <p className="title">Call Duration</p>
        <div className="call-sub">
          <p className="call-total-time">{callDuration}</p>
          <div className="pr-qa-container">
            <CallDurationChart data={data} />
          </div>
        </div>
      </div>
      <div className="audio-container">
        <p className="title">Audio Quality</p>
        <div className="graph">
          <p className="audio-quality">Medium</p>
          <div className="bar-chart">
            <BarCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskCallAudio;
