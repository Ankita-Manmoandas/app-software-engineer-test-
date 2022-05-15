import { useState } from "react";
import "./Carousel.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import CTAButton from "../CTAButton/CTAButton";

const Carousel = (props) => {
  const { imagesArr, title, subtitle } = props;
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === imagesArr.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(imagesArr.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__icons">
        <section className="carousel__overlay">
          <img src={imagesArr[counter]} alt="" className="carousel__image" />

          <section className="carousel__arrows">
            <img
              src={leftArrow}
              alt="left arrow"
              onClick={handleDecrement}
              className="carousel__arrow carousel__arrow--left"
            />

            <img
              src={rightArrow}
              alt="right arrow"
              onClick={handleIncrement}
              className="carousel__arrow carousel__arrow--right"
            />
          </section>
        </section>
      </div>

      <div className="carousel__text">
        <h2 className="carousel__centered">{title}</h2>
        <h4 className="carousel__centered">{subtitle}</h4>
        <CTAButton buttonText={"Contact us"} isSecondary={false} />
      </div>
    </div>
  );
};

export default Carousel;
