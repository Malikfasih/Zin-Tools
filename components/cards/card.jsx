import React, { useState } from "react";
import "./card.css";
import Image from "next/image";
import { IoBookmarkOutline } from "react-icons/io5";

const card = ({ card, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const trimDescription = (description, limit) => {
    const words = description.split(" ");
    if (words.length > limit) {
      return `${words.slice(0, limit).join(" ")}...`;
    }
    return description;
  };

  return (
    <div
      key={index}
      className={`cardContainer ${isHovered ? "hovered" : ""}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="bookmarkIcon">
        {isHovered ? <IoBookmarkOutline /> : ""}
      </div>
      <div className="imageContainer">
        <Image src={card.image} alt={card.title} width={100} height={70} />
      </div>
      <div className="textContainer">
        <h3 className="title">{card.title}</h3>
        <p className="description">{trimDescription(card.description, 13)}</p>
      </div>
    </div>
  );
};

export default card;
