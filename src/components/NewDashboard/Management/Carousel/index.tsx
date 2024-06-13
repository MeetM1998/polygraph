import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";
import LeftArrow from "../../../../assets/left-arrow.svg";
import RightArrow from "../../../../assets/right-arrow.svg";
import "./Carousel.scss";

interface CustomArrowProps {
  onClick?: () => void;
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  nextArrow: React.ReactElement<CustomArrowProps>;
  prevArrow: React.ReactElement<CustomArrowProps>;
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

const Carousel = () => {
  const [slidesToShow, setSlidesToShow] = useState<number>(3);
  const [slidesToScroll, setSlidesToScroll] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setSlidesToShow(3);
        setSlidesToScroll(3);
      } else if (screenWidth >= 768) {
        setSlidesToShow(2);
        setSlidesToScroll(2);
      } else {
        setSlidesToShow(1);
        setSlidesToScroll(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings}>
      <div className="carousel">
        <h3>
          The CEO notes business strengthening over 3 years yet lacks evidence,
          suggesting <span>transparency could improve.</span>
        </h3>
      </div>
      <div className="carousel">
        <h3>
          Asset and Wealth Management’s $2.5 trillion in assets and{" "}
          <span>full product range cited to convey excitement in business</span>
        </h3>
      </div>
      <div className="carousel">
        <h3>
          While “scale” and capital” matter,
          <span>
            niche strength or leadership in “broad, global” business enables
            returns
          </span>
          ; number one or two in “almost everything.”
        </h3>
      </div>
      <div className="carousel">
        <h3>
          Demand and pricing advantages as well as “real leadership position”
          with
          <span>
            “extraordinary” wealth opportunity expressed positively relative to
            modest projections.
          </span>
        </h3>
      </div>
      <div className="carousel">
        <h3>
          Positivity in “quite good” transaction business with
          <span>
            “a lot of opportunity” over a decade starkly contrasts with its
            present $3 billion to $5 billion.
          </span>
        </h3>
      </div>
      <div className="carousel">
        <h3>
          A 19.96% gap between overly optimistic tone and cautious content
          signals
          <span> expectations may have outpaced constrained outlook,</span>
          portending underperformance.
        </h3>
      </div>
      <div className="carousel">
        <h3>
          <span>The CEO shows depth, acknowledging “headwinds”</span> but should
          temper language to match modest results; “strengthening” and
          “excitement” unsettle if unsupported.
        </h3>
      </div>
      <div className="carousel">
        <h3>
          Boasts of leadership must cite competitors, sources and defend against
          potential threat as
          <span>
            “niche” players may gain “significant” growth through focus.
          </span>
        </h3>
      </div>
    </Slider>
  );
};

export default Carousel;
