
import {useState, useEffect} from "react";

import Carousel from "../../components/Carousel/Carousel";


const Home = () => {
  
  const [imgArr, setImgArr] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  

  useEffect (() => {
    const URL = "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
    fetch(URL).then(response => {
      return response.json ()
    }).then(imageObject => {
    
    setTitle(imageObject.Details[0].Title)
    setSubTitle(imageObject.Details[2].Subtitle)
    setImgArr(imageObject.Details.map(image => image.ImageUrl))
    })

  
  },[])





  


  return <>
   <Carousel imagesArr = {imgArr} title={title} subtitle={subtitle} />

  
  </>
}

export default Home; 