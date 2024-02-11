import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
export default function StarRating({ noOfStars = 5 }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  function handleMouseClick(index) {
    setRating(index);
  }

  function handleMouseMove(index) {
    setHover(index);
  }

  function handleMouseLeave(index) {
    setHover(rating);
  }

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleMouseClick(index)}
            onMouseEnter={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
}
