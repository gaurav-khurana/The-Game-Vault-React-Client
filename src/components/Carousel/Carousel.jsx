import "./Carousel.scss";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function GameCarousel({ singleGame }) {
  // console.log(singleGame);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    // <section className="carousel">

    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel__image-container"
    >
      <Carousel.Item>
        {/* <img className="carousel__image" src={singleGame.image2} alt="abc" /> */}

        <img
          className="carousel__image"
          src={singleGame.image2}
          alt={`image for ${singleGame.title}`}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel__image"
          src={singleGame.image3}
          alt={`image for ${singleGame.title}`}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel__image"
          src={singleGame.image4}
          alt={`image for ${singleGame.title}`}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel__image"
          src={singleGame.image5}
          alt={`image for ${singleGame.title}`}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel__image"
          src={singleGame.image1}
          alt={`image for ${singleGame.title}`}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // </section>
  );
}

export default GameCarousel;
