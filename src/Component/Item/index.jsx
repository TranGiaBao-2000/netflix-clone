import React from "react";

function Item({ info, isPoster }) {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="item">
      <img
        src={`${baseImgUrl}${
          isPoster === true ? info.poster_path : info.backdrop_path
        }`}
        alt=""
      />
    </div>
  );
}

export default Item;
