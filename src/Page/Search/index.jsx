import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../Action/axios";
import ComplexGrid from "../../GridMaterial";
import "./style.css";
function SearchPage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchCode = location.pathname.split("/").pop();
  const searchRender = searchCode.replace("+", " ");
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `/search/movie?api_key=a10ee5569194b352bcca20840b7f8a32&query=${searchCode}`
      );
      setMovies(res.data.results);
    }
    fetchData();
  }, [searchCode]);
  const renderFilm = () => {
    // return movies.map((item) => {
    //   return (
    //     <div>
    //       <ComplexGrid />
    //     </div>
    //   );
    // });
    return (
      <div className="list-group">
        <ComplexGrid tileData={movies} />
      </div>
    );
  };
  return (
    <div className="search-page">
      <h1>
        {movies.length} results for '{searchRender}':
      </h1>
      <div className="">{movies.length > 0 ? renderFilm(movies) : ""}</div>
    </div>
  );
}

export default SearchPage;
