import React from "react";
import { directors } from "../data";


function Directors() {
  let idCounter = 0;
  const directorlist = directors.map((dir) => {
    const moviesList = (dir.movies).map((mov) =><li key={++idCounter}>{mov}</li>)

    return(
      <div key={++idCounter}>
        <h1>{dir.name}</h1>
        <ul>
          {moviesList}
        </ul>
      </div>
    )
  })
  return(
  <div>
    <h1>Directors Page</h1>
    <ul>{directorlist}</ul>
  </div>
  )
}

export default Directors;
