import React from "react";
import "./card.css";
import Image from "next/image";

const bookmarkCard = ({ card, index }) => {
  const trimDescription = (description, limit) => {
    const words = description.split(" ");
    if (words.length > limit) {
      return `${words.slice(0, limit).join(" ")}...`;
    }
    return description;
  };

  return (
    <div key={index} className="bookmark__container">
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

export default bookmarkCard;
