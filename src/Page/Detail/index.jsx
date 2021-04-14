import React, { useState, useEffect } from "react";
import "./style.css";
import GradeIcon from "@material-ui/icons/Grade";
// import PrimarySearchAppBar from "../../Component/Header";
import { useLocation } from "react-router-dom";
import axios from "../../Action/axios";
import { Button } from "@material-ui/core";
import Rateing from "../../Component/Rating";
function Detail() {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const location = useLocation();
  const id = location.pathname.split("/")[
    location.pathname.split("/").length - 1
  ];
  const [movie, setMovies] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [showTrailer, setShowTrailer] = useState("");
  useEffect(() => {
    async function getDetail() {
      const detail = await axios.get(
        `/movie/${id}?api_key=a10ee5569194b352bcca20840b7f8a32`
      );
      const trailerID = await axios.get(
        `/movie/${id}/videos?api_key=a10ee5569194b352bcca20840b7f8a32`
      );
      setTrailer(trailerID.data.results[0]?.key);
      setMovies(detail.data);
      console.log(detail.data);
    }
    getDetail();
  }, [id]);

  const handleButtonTrailer = () => {
    if (showTrailer === "") {
      setShowTrailer("show");
    } else {
      setShowTrailer("");
    }
  };

  const showTrailerDiv = () => {
    return (
      <div className="detail-trailer">
        <div
          className="detail-overplay"
          onClick={() => handleButtonTrailer()}
        ></div>
        <iframe
          src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=0&loop=1&playlist=${trailer}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  return (
    <div>
      {" "}
      <div className="detail">
        <img src={baseImgUrl + movie.backdrop_path} alt="" />
        <div className="detail-content">
          <div className="wrapper">
            <div className="detail-content-img">
              <img src={baseImgUrl + movie.poster_path} alt="" />
              <div className="">
                <Rateing rate={movie.vote_average * 10} size="70" />
                <p>{movie.vote_count} vote</p>
              </div>
            </div>
            <div className="detail-content-text">
              <div className="detail-content-text-above">
                <p>{movie.release_date}</p>
                <h2>{movie.original_title}</h2>
              </div>
              <p>{movie.overview}</p>
              <Button
                variant="contained"
                className="detail-button"
                onClick={() => handleButtonTrailer()}
              >
                Trailer
              </Button>
            </div>
            <div className="detail-content-rate">
              <Rateing rate={movie.vote_average * 10} size="70" />
              <p>{movie.vote_count} vote</p>
            </div>
          </div>
        </div>
        <div className="detail-fade-bottom"></div>
      </div>
      {showTrailer === "" ? "" : showTrailerDiv()}
    </div>
  );
}

export default Detail;
