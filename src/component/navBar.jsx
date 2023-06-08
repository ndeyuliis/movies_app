import { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useSearchContext}  from "../MoviesProvider";

 function NavBar () {
  const [search, setSearch] = useState("");

  const setMovies = useSearchContext();

  const url = "https://api.themoviedb.org/3/";

  const api_key = "678e67926e65ad8d3be3389d74add614";


  const searchMovies = async () => {

   /* if (search.trim() === "") {
      return;
    }*/

    try {
      const response = await axios.get(
        `${url}/search/movie?query=${search}&api_key=${api_key}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  }
  
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchMovies();
  };

  return (
  <form onSubmit={handleSearchSubmit}>
<input
  type="text"
  value={search}
  onChange={handleSearchChange}
  placeholder="search ..."
></input>
<button type="submit">Search</button>
</form>
  )
  }



export default NavBar;