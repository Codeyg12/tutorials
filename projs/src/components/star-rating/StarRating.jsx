import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = ({ numOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (id) => {
    setRating(id);
  };
  const handleMouseMove = (id) => {
    setHover(id);
  };
  const handleMouseLeave = (rating) => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(numOfStars)].map((_, i) => {
        i += 1;
        return (
          <FaStar
            key={i}
            className={i <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(i)}
            onMouseMove={() => handleMouseMove(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
