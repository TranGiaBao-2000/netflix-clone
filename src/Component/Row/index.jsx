import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "../../Action/axios";
import Item from "../Item";
import "./style.css";
function Row({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([]);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    async function fetchData() {
      const results = await axios.get(fetchUrl);
      setMovies(results.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const fillList = (list) => {
    return (
      <div>
        <Slider {...settings}>
          {movies.map((movie) => {
            return <Item info={movie} isPoster={isPoster} key={movie.id} />;
          })}
        </Slider>
      </div>
    );
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      {movies ? fillList(movies) : ""}
    </div>
  );
}

export default Row;
