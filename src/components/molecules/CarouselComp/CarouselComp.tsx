import React from "react";
import Carousel from "react-material-ui-carousel";
import back7 from "../../../assets/images/background7.jpg";
import back8 from "../../../assets/images/background8.jpg";
import back9 from "../../../assets/images/background9.jpg";
import { Image } from "../..";
import "./CarouselComp.scss";

const CarouselComp = () => {
  var items = [
    {
      no: back7,
    },
    {
      no: back8,
    },
    {
      no: back9,
    },
  ];
  return (
    <div className="carousel__box">
      <Carousel>
        {items.map((item, i) => (
          <Image src={item.no} className="carousel"></Image>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
