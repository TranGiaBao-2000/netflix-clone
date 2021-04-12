import React from "react";
import Carousel from "../../Component/Carousel";
import PrimarySearchAppBar from "../../Component/Header";
import requests from "../../Action/requests";
import Row from "../../Component/Row";
function Home() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Carousel fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isPoster />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default Home;
