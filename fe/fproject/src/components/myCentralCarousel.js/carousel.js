import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

function NewsCarousel() {
  return (
    <div className="carousel">
    <Carousel fade>
      <Carousel.Item>
        {/* Contenuto della prima slide */}
      </Carousel.Item>
      <Carousel.Item>
        {/* Contenuto della seconda slide */}
      </Carousel.Item>
      <Carousel.Item>
        {/* Contenuto della terza slide */}
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default NewsCarousel;
