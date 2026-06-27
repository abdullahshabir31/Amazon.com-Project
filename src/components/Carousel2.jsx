import React from "react";
import Slider from "react-slick";

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
          <img src="src\carousel pic\Image 1.jpg" alt="" />
        </div>
        <div>
          <img src="src\carousel pic\Image 2.jpg" alt="" />
        </div>
        <div>
          <img src="src\carousel pic\Image 3.jpg" alt="" />
        </div>
        <div>
          <img src="src\carousel pic\Image 4.jpg" alt="" />
        </div>
        <div>
          <img src="src\carousel pic\Image 5.jpg" alt="" />
        </div>
        <div>
          <img src="src\carousel pic\Image 6.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default UnevenSetsFinite;
