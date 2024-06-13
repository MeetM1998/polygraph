import React from "react";
import { Tooltip } from "@mui/material";
import { EventData } from "../../../Types/eventsDataTypes";
import ImformationIcon from "../../../assets/information.svg";
import "./Hesitation.scss";

const Hesitation = (data: EventData) => {
  const longText = `Hesitation can signal that the speaker is feeling stressed or uncertain. In a study published in the journal Psychological Science, researchers found that people who were feeling stressed were more likely to hesitate before answering questions. The researchers believe that this is because stress can impair cognitive function and make it difficult to think clearly. \n 
  Hesitation can also signal that the answering the question altogether. In a study published in the journal Journal of Personality and Social Psychology, researchers found that people who were trying to avoid answering a question were more likely to hesitate before answering. The researchers believe that this is because people who are trying to avoid answering a question are more likely to be concerned about the consequences of answering.`;

  return (
    <div className="section-hesitation">
      <div className="hesitation-container">
        <p className="hesitation-title">Hesitation Dimension</p>
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
      <div className="hesitation-description">
        <p>
          “You know, I think we, let’s start with the fact that I think one of
          the things that I feel great about in the context of Goldman Sachs is
          we have a long history of a very, very collaborative and communicative
          culture.”
        </p>
        <p>- CEO {data?.ceo_name}</p>
      </div>
    </div>
  );
};

export default Hesitation;
