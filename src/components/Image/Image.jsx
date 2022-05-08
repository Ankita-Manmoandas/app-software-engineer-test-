import defaultImage from "../../assests/images/shutterstock_696636415.jpg"
import "./Image.scss";

const Image = () => {
  return <div className="Image-border">

  <img src ={defaultImage} className="Image-border__unit" />
  </div>
}

export default Image;