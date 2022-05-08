import Navbar from "../../components/Navbar/Navbar"
import Image from "../../components/Image/Image";
import data from "../../data/text";


const About = () => {
  return <>
  <h2>About us</h2>

  <h3> {data[1].title} </h3>
  <p>{data[1].paragraph}</p>
  <p>{data[1].paragraph}</p>
  <Image /> 
  <p>{data[0].subtitle}</p>
  <p>{data[0].paragraph}</p>
  <p>{data[1].paragraph}</p>


  </>
}

export default About;