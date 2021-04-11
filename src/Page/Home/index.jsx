import React from "react";
import Carousel from "../../Component/Carousel";
import PrimarySearchAppBar from "../../Component/Header";
import requests from "../../Action/requests";
function Home() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Carousel fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default Home;
