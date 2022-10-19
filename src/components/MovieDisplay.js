import React from "react";

function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <>
        <h1 className="title">{movie.Title}</h1>
        <h2 className="genre">{movie.Genre}</h2>
        <img className="pic" src={movie.Poster} alt={movie.Title} />
        <h2 className="year">{movie.Year}</h2>
      </>
    );
  };
  const loading = () => {
    return <h1>No Movie To Display</h1>;
  };
  return movie ? loaded() : loading();
}

export default MovieDisplay;
