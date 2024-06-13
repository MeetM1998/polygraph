import React, { useState } from "react";

interface CircleIconProps {
  filled: boolean;
  onClick: () => void;
}

const CircleIcon: React.FC<CircleIconProps> = ({ filled, onClick }) => {
  const iconStyle: React.CSSProperties = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "1px solid #FE912C",
    margin: "5px",
    backgroundColor: filled ? "#DE4743" : "transparent",
    display: "inline-block",
    cursor: "pointer",
  };

  return <div style={iconStyle} onClick={onClick}></div>;
};

interface RatingProps {
  totalStars: number;
}

const Rating: React.FC<RatingProps> = ({ totalStars }) => {
  const [rating, setRating] = useState<number>(2);

  const handleClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <CircleIcon
          key={index}
          filled={index < rating}
          onClick={() => handleClick(index + 1)}
        />
      ))}
    </div>
  );
};

const CustomRating = () => {
  return (
    <div>
      <Rating totalStars={5} />
    </div>
  );
};

export default CustomRating;
