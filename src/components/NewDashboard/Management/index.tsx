import Carousel from "./Carousel";
import "./Management.scss";

const Management = () => {
  return (
    <div className="management-container">
      <p className="managemet-behavior-title">Management’s Behavior Suggests</p>
      <div className="carousel-container">
        <Carousel />
      </div>
    </div>
  );
};

export default Management;
