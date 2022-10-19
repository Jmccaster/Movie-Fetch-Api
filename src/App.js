import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import "./style.css";

function App() {
  const apiKey = "f5068e78";
  // Establish ApiKey

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      // get Movie&save response to state
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );

      const data = await response.json();

  useEffect(() => {
    getMovie("Hulk");
  }, []);
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
