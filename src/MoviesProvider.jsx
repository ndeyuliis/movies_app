import React, {useContext, useEffect, useState } from "react";

import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Home from "./component/home";
import NavBar from "./component/navBar";

const moviesContext = React.createContext();
const searchContext = React.createContext();
const busquedaContext = React.createContext();


export function useMoviesContext() {
  return useContext(moviesContext);
}


export function useSearchContext() {
  return useContext(searchContext);
}
export function useBusquedaContext() {
    return useContext(busquedaContext);
}



function MoviesProvider({children}) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [ranking, setRanking] = useState();
  const [info, setInfo] = useState("");
  const contextSearch = {search, setSearch}  
  const contextMovies = {movies, setMovies}  

  const url = "https://api.themoviedb.org/3/";

  const api_key = "678e67926e65ad8d3be3389d74add614";

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `${url}/discover/movie?api_key=${api_key}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
      if(search !== ""){

      }else{
      getMovies();

  }}, []);

  return (
    <moviesContext.Provider value={contextMovies}>
    <busquedaContext.Provider value={contextSearch}>
      
      {children}
      </busquedaContext.Provider>

    </moviesContext.Provider>
  );
}

export {MoviesProvider, moviesContext};
