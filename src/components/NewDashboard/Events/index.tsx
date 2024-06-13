import Chip from "@mui/material/Chip";
import dayjs from "dayjs";
import { useMemo } from "react";
import { EventData } from "../../../Types/eventsDataTypes";
import "./Events.scss";

const Topics = [
  { topic: "Strategy" },
  { topic: "Growth" },
  { topic: "Transaction Banking" },
  { topic: "Markets" },
  { topic: "Expanse" },
];

const Events = (data: EventData) => {
  const dateFormat = useMemo(
    () => dayjs(`${data.event_date}`).format("MMMM D, YYYY"),
    [data]
  );

  return (
    <div className="event-container">
      <div className="events">
        <p className="events-title">{data?.company_name}</p>
        <p className="events-subtitle">{data?.event_title}</p>
        <p className="events-date-participant">
          {dateFormat}{" "}
          <span>
            | Participants:{" "}
            {data.participants.length > 0
              ? data.participants.join(", ")
              : "N/A"}
          </span>
        </p>
      </div>

      <div className="topics">
        <p className="topic-title">Topics</p>
        <div className="chips">
          {Topics.map((item, index) => (
            <Chip key={index} label={item.topic} className="topic-chip" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
