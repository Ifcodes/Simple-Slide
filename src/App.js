import { useState } from "react";
import "./App.css";
import btnBack from "./images/icons8-back-arrow-50 (1).png";
import btnForward from "./images/icons8-forward-button-50.png";
import image1 from "./images/nature1.jpeg";
import image2 from "./images/nature2.jpeg";
import image3 from "./images/nature3.jpeg";
import image4 from "./images/nature4.jpeg";
import image5 from "./images/nature 5.jpeg";
import image6 from "./images/nature6.jpeg";
import image7 from "./images/selfie1.jpeg";
import image8 from "./images/selfie2.jpeg";

function App() {
  const [margn, setMargin] = useState(6.5);

  const slideMovement = {
    marginLeft: `${margn}rem`,
  };

  const handleSlideMovement = (val, btn) => {
    if (val <= -7 || val > 7) {
      setMargin(6.5);
    } else if (btn) {
      setMargin(margn - 10);
    } else {
      setMargin(margn + 10);
    }
  };
  // const handleBackward = () => {
  //   if (margn > 5) {
  //     setMargin(3);
  //   } else {
  //     setMargin(margn + 10);
  //   }
  // };
  return (
    <div className="App">
      <div className="head">
        <button onClick={() => handleSlideMovement(margn, false)}>
          <img src={btnBack} alt="backward" />
        </button>
        <div className="slides-cont">
          <div className="slide" style={slideMovement}>
            <img src={image1} alt="" />
          </div>
          <div className="slide slide2">
            <img src={image2} alt="" />
          </div>
          <div className="slide slide3">
            <img src={image3} alt="" />
          </div>
          <div className="slide slide4">
            <img src={image4} alt="" />
          </div>
          <div className="slide slide5">
            <img src={image5} alt="" />
          </div>
          <div className="slide slide6">
            <img src={image6} alt="" />
          </div>
          <div className="slide slide7">
            <img src={image7} alt="" />
          </div>
          <div className="slide slide8">
            <img src={image8} alt="" />
          </div>
        </div>
        <button onClick={() => handleSlideMovement(margn, true)}>
          <img src={btnForward} alt="forward" />
        </button>
      </div>
    </div>
  );
}

export default App;
