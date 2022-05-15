
import backgroundImage from "../../assests/images/shutterstock_1302552622.jpg"
import "./ImageOverlay.scss"
import CTAButton from "../CTAButton/CTAButton";
const ImageOverlay = props => {
  const {header,paragraph} = props;
  return <div className="overlay">
  <img src={backgroundImage} className="overlay__background" /> 
 <div className="overlay__text--area" >

  <div className="overlay__shadow">
  <h3 className="overlay__header"> {header}</h3>
  <p className="overlay__paragraph">{paragraph} </p>
  <CTAButton buttonText={"Log in"} isSecondary={true}/>
  
  </div>
  </div>
  </div>
}

export default ImageOverlay;