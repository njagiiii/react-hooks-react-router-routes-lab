import React from "react";
import { movies } from "../data";

function Movies() {
  let idCounter = 0;

  const movielist = movies.map((movie) => {
    const genrelist =(movie.genres).map((gen)=><li key={++idCounter}>{gen}</li>);

    return(
      <div key={++idCounter}>
        <h1>{movie.title}</h1>
        <h2>Time:{movie.time}</h2>
        <ul>
          {genrelist}
        </ul>
      </div>
    )
  })

  return( 
  <div>
    <h1>Movies Page</h1>
         <ul>{movielist}</ul>
         </div>
  )
}

export default Movies;
