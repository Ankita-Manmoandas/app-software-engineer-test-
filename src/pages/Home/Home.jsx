import { useState, useEffect } from "react";

import Carousel from "../../components/Carousel/Carousel";
import Image from "../../components/Image/Image";
import data from "../../data/text";
import ImageOverlay from "../../components/ImageOverlay/ImageOverlay";

const Home = () => {
  const [imgArr, setImgArr] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const paragraph1 ="";
  const paragraph2 ="";
  const paragraph3 ="";
  


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
      .catch(err => {
        console.log("Error Reading data " + err);
      })
  }, []);

  const textMap = data.map((text,index) => {
    return <>
     {text.title} {text.subtitle} {text.paragraph} </>
  

    


  })
 

  return (
    <>
      <Carousel imagesArr={imgArr} title={title} subtitle={subtitle} />
      <Image /> 
      <paragraph> {data[0].title} 
     {data[0].subtitle} {data[0].paragraph}</paragraph>
      <ImageOverlay  header = {data[1].title} paragraph= {data[1].paragraph} />
      <paragraph> {data[2].title} 
     {data[2].subtitle} {data[2].paragraph}</paragraph>
     
    

    </>
  );
};

export default Home;
