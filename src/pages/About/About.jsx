import Navbar from "../../components/Navbar/Navbar";
import Image from "../../components/Image/Image";
import data from "../../data/text";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <h2 className="about__text">About us</h2>

      <h3 className="about__text"> {data[1].title} </h3>
      <p className="about__text"> {data[1].paragraph}</p>
      <p className="about__text">{data[1].paragraph}</p>
      <Image />
      <p className="about__text">{data[0].subtitle}</p>
      <p className="about__text">{data[0].paragraph}</p>
      <p className="about__text">{data[1].paragraph}</p>
    </div>
  );
};

export default About;
