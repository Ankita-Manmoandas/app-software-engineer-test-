import defaultImage from "../../assests/images/shutterstock_696636415.jpg"
import "./Image.scss";

const Image = props => {

  const {isHome} = props;
  let widthLength = "Image-border__unit"
  if (isHome) {
    widthLength += "__home"
  } else {
    widthLength += "__about"
  }
  
  return <div className="Image-border">

  <img src ={defaultImage} className={widthLength} />
  </div>
}

export default Image;