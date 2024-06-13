import { Chip } from "@mui/material";
import KeyTopicsCarousel from "./Carousel";
import "./KeyTopics.scss";

const KeyTopics = () => {
  const Topics = [
    { topic: "Strategy" },
    { topic: "Growth" },
    { topic: "Transaction Banking" },
    { topic: "Markets" },
    { topic: "Expanse" },
  ];
  return (
    <div className="section-key-topics">
      <p className="key-topics-title">Key Topics Discussed</p>
      <div className="key-topics-container">
        <div className="keys-container">
          {Topics?.map((item, index) => (
            <Chip label={item.topic} key={index} className="key-chips" />
          ))}
        </div>
        <div className="keys-carousel">
          <KeyTopicsCarousel slidesToShow={1} slidesToScroll={1} />
        </div>
      </div>
    </div>
  );
};

export default KeyTopics;
