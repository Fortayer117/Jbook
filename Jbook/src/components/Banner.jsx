import React from "react";
import dandan from "../images/dandan.jpg";
import read from "../images/read.png";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={read} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={dandan} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
