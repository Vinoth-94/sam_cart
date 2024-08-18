import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ style }} onClick={() => onClick(i + 1)}>
          {rating > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </>
  );
};

export default Rating;
