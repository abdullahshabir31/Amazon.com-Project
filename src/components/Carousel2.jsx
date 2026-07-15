import React from "react";
import Slider from "react-slick";

import Image1 from "../carousel pic/Image 1.jpg";
import Image2 from "../carousel pic/Image 2.jpg";
import Image3 from "../carousel pic/Image 3.jpg";
import Image4 from "../carousel pic/Image 4.jpg";
import Image5 from "../carousel pic/Image 5.jpg";
import Image6 from "../carousel pic/Image 6.jpg";

function UnevenSetsFinite() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={Image1} alt="" />
        </div>
        <div>
          <img src={Image2} alt="" />
        </div>
        <div>
          <img src={Image3} alt="" />
        </div>
        <div>
          <img src={Image4} alt="" />
        </div>
        <div>
          <img src={Image5} alt="" />
        </div>
        <div>
          <img src={Image6} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default UnevenSetsFinite;
