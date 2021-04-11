import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
function SlideCenter({ listFilm }) {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <Slider {...settings}>
        {listFilm.map((movie) => {
          return (
            <div className="item" key={movie.id}>
              <img src={baseImgUrl + movie.backdrop_path} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SlideCenter;
