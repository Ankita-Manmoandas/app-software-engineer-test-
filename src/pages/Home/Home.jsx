import { useState, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Image from "../../components/Image/Image";
import data from "../../data/text";
import ImageOverlay from "../../components/ImageOverlay/ImageOverlay";
import "./Home.scss";
import CTAButton from "../../components/CTAButton/CTAButton";

const Home = () => {
  const [imgArr, setImgArr] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const paragraph1 = "";
  const paragraph2 = "";
  const paragraph3 = "";

  useEffect(() => {
    const URL =
      "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details";
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((imageObject) => {
        setTitle(imageObject.Details[0].Title);
        setSubTitle(imageObject.Details[2].Subtitle);
        setImgArr(imageObject.Details.map((image) => image.ImageUrl));
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }, []);

  const textMap = data.map((text, index) => {
    return (
      <>
        {text.title} {text.subtitle} {text.paragraph}{" "}
      </>
    );
  });

  return (
    <div className="home">
      <Carousel imagesArr={imgArr} title={title} subtitle={subtitle} />
      <section className="home__flex">
        <Image className="home__image" isHome={true} />
        <div className="home__flextext">
          <h4 className="home__text">{data[0].title}</h4>
          <p className="home__text">
            {data[0].subtitle} {data[0].paragraph}
          </p>
          <div className="home__button--area">
            <CTAButton
              buttonText={"Learn more"}
              isSecondary={false}
              className="home__button"
            />
          </div>
        </div>
      </section>

      <ImageOverlay header={data[1].title} paragraph={data[1].paragraph} />
      <section className="home__title">
        <h5> {data[2].title} </h5>
        <h6>{data[2].subtitle}</h6>
      </section>

      <section className="home__columns">
        <p className="home__text"> {data[2].paragraph}</p>
      </section>

      <div className="home__button--area">
        <CTAButton
          buttonText={"Contact us"}
          isSecondary={false}
          className="home__button"
        />
      </div>
    </div>
  );
};

export default Home;
