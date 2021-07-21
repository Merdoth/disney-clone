import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import './common.css';
import { selectTrending } from "../../reducers/movie/movieSlice";

function Trending() {
  const movies = useSelector(selectTrending);

  return (
    <div className="container">
    <h4 id="series">Trending</h4>
    <div className="content">
          {
            movies && movies.map((movie, key) => (
              <div className="wrap" key={key}>
                {movie.id}
                <Link className="link" to={`/details/${movie.id}`}>
                  <img src={movie.cardImg} alt={movie.title}/>
                </Link>
              </div>
            ))
          }
      </div>
  </div>
  )
}

export default Trending;
