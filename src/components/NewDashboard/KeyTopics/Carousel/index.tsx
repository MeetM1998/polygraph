import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LeftArrow from "../../../../assets/left-arrow.svg";
import RightArrow from "../../../../assets/right-arrow.svg";
import "./Carousel.scss";

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <img src={RightArrow} alt="right" />
    </div>
  );
};

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <img src={LeftArrow} alt="left" />
    </div>
  );
};

const KeyTopicsCarousel = ({ slidesToShow, slidesToScroll }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="key-carousel">
          <h3>
            According to CEO David Solomon, Goldman Sachs has strengthened its
            core businesses over the last three years through a focus on client
            experience, partnerships, targeted investments and risk management.
            While uncertainties exist, Solomon expressed confidence in Goldman’s
            positioning and ability to serve clients across cycles. Granular
            details were provided on strategic initiatives, expense reductions,
            growth opportunities and risk levels demonstrating management’s
            command of issues.
          </h3>
        </div>
        <div className="key-carousel">
          <h3>
            Citing 350 basis points of client share gains, Solomon noted “scale
            is mattering more and more... the stronger are going to continue to
            get stronger.” As a “number one or number two player across almost
            everything,” Goldman is well-positioned. Investments in
            “differentiated” areas like healthcare, technology and renewable
            energy will continue while a “quiet focus” on operating
            “efficiently” enables “capacity” to invest. Transaction banking
            presents a “$3 billion to $5 billion” “opportunity” to “wake up” in
            a “decade” with a “pretty big business.”
          </h3>
        </div>
        <div className="key-carousel">
          <h3>
            Despite macro “challenges” and a “cyclical business,” a “glass half
            full” view expects a “soft landing.” A “more conservative lens” sees
            risks like a “train wreck scenario.” While uncertain, a “focus” on
            the “long term” and “serving our clients” should enable Goldman to
            “advance the franchise.” A candid Solomon said “there’s no question”
            Goldman benefited from competitors’ issues, but its confidence seems
            substantiated if goals are achieved. Monitoring results, tone and
            transparency can determine if optimism aligns with outcomes.
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default KeyTopicsCarousel;
