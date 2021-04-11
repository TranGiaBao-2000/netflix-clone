import React, { useState, useEffect } from "react";
import SlideCenter from "../SlideCenter";
import axios from "../../Action/axios";
import "./style.css";
function Carousel({ requests, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="carousel">
      <SlideCenter listFilm={movies} />
      <div className="carousel-fade-bottom"></div>
    </div>
  );
}

export default Carousel;
