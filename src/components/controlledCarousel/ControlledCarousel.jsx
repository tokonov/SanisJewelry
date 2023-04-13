import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../media/slider/slide1.jpg";
import Slide2 from "../../media/slider/slide2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
