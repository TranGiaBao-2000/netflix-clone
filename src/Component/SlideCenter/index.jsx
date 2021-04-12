import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Button } from "@material-ui/core";
function SlideCenter({ listFilm }) {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <Slider {...settings}>
        {listFilm.map((movie) => {
          return (
            <div className="item" key={movie.id}>
              <div className="item-img">
                <img src={baseImgUrl + movie.backdrop_path} alt="" />
              </div>
              <div className="item-content">
                <h2>{movie.name}</h2>
                <p>{movie.overview.substring(0, 150) + "..."}</p>
                <div className="item-content-button">
                  <Button variant="contained">Trailer</Button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SlideCenter;
