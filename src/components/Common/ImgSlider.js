import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./common.css";
import Slider3 from "../../assets/images/slider-scale.jpg";
import Slider2 from "../../assets/images/slider-badag.jpg";
import Slider4 from "../../assets/images/slider-scales.jpg";
import Slider1 from "../../assets/images/slider-badging.jpg";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
      <Slider {...settings} className="carousel">
        <div className="carousel__wrap">
          <a href="#">
            <img src={Slider1} alt="Movie Carousel" />
          </a>
        </div>
        <div className="carousel__wrap">
          <a href="#">
            <img src={Slider3} alt="Movie Carousel" />
          </a>
        </div>
        <div className="carousel__wrap">
          <a href="#">
            <img src={Slider2} alt="Movie Carousel" />
          </a>
        </div>
        <div className="carousel__wrap">
          <a href="#">
            <img src={Slider4} alt="Movie Carousel" />
          </a>
        </div>
      </Slider>
  )
}

export default ImgSlider;
