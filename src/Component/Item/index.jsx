import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink } from "react-router-dom";
function Item({ info, isPoster }) {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <NavLink to={`/movie-detail/${info.id}`}>
      <div className="item">
        <LazyLoadImage
          src={`${baseImgUrl}${
            isPoster === true ? info.poster_path : info.backdrop_path
          }`}
          alt=""
          effect="blur"
          placeholderSrc={process.env.PUBLIC_URL + "placeholder.svg"}
        />
      </div>
    </NavLink>
  );
}

export default Item;
