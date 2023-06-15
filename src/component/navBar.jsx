import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { useMoviesContext } from "../MoviesProvider";
import { useBusquedaContext } from "../MoviesProvider";

function NavBar() {
  const [ratingFilter, setRatingFilter] = useState(0);
  const { movies, setMovies } = useMoviesContext();

  const { search, setSearch } = useBusquedaContext();

  const url = "https://api.themoviedb.org/3/";

  const api_key = "678e67926e65ad8d3be3389d74add614";

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `${url}/search/movie?query=${search}&api_key=${api_key}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchMovies();
  };

  return (
    <div className="font-nav">
      <form onSubmit={handleSearchSubmit}>
        <Box
          sx={{
            height: "10em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            maxWidth: "30em",
          }}
        >
          <input
            style={{
              width: "30em",
              height: "1em",
              backgroundColor: "white",
              borderRadius: "10px 0px 0px 10px",
              border: 1,
              margin: "auto",
              padding: "10px",
            }}
            onChange={handleSearchChange}
            placeholder="search ..."
          />
          <button
            style={{
              height: "2.4em",
              width: "5em",
              border: 1,
              borderRadius: "0px 10px 10px 0px",
              backgroundColor: "#045FB4",
              color: "white",
            }}
          >
            Search
          </button>
        </Box>
      </form>
    </div>
  );
}

export default NavBar;
