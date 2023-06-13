import React, {useEffect, useState} from "react";
import  {useMoviesContext}  from "../MoviesProvider";
import { useInfoContext } from "../MoviesProvider";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useLocation } from 'react-router-dom';
import axios from "axios";


export  function InfoPelis() {

  const [info, setInfo] = useState("")
 const { id } = useParams();
 console.log(id, "info")

/*
 const location = useLocation();
  const { movies } = location.state;
  console.log(movies, "mov")
 // const {movies, setMovies}  = useMoviesContext();
const infoMovies = mov
  console.log(movies, "info pelis")
 if (!mov) {
    return <div>Cargando...</div>; // Indicador visual mientras carga la data
  }/*
  if (movies.length === 0) {
    return <div>No se encontraron resultados</div>;
  }

  const infoMovies = movies.find((e) => e.id === parseInt(id));
  const { title, overview, poster_path, original_title } = infoMovies;*/

  const getInfo = async () => {
    try {
const response = await axios.get(
  `https://api.themoviedb.org/3/movie/${id}?api_key=678e67926e65ad8d3be3389d74add614` 

);
setInfo(response.data)
} catch (error) {
console.error("Error searching movies:", error);

}}

  useEffect(() => {
    getInfo()
}, []);


  return (
    <Card>
      <CardMedia
        sx={{height: "300px", mt:5 }}
        image={"https://image.tmdb.org/t/p/original/" + info.poster_path}
        alt={info.original_title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {info.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
