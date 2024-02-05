"use client";

import "./card.css";
import { convertFromPDF as fromPDF } from "@/constants/cardsData";
import Card from "./card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

const convertFromPDF = () => {
  const PrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div className="prevArrow" style={{ ...style }} onClick={onClick}>
        <FaRegArrowAltCircleLeft />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div className="nextArrow" style={{ ...style }} onClick={onClick}>
        <FaRegArrowAltCircleRight />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="cards">
      <h1 className="cards__heading">Convert from PDF</h1>
      <Slider {...settings}>
        {fromPDF.map((card, index) => (
          <Card card={card} index={index} />
        ))}
      </Slider>
    </div>
  );
};

export default convertFromPDF;
