import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

export function InfoPelis() {
  const [info, setInfo] = useState("");
  const { id } = useParams();

  const getInfo = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=678e67926e65ad8d3be3389d74add614`
      );
      setInfo(response.data);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  if (!info) {
    return <div>Cargando...</div>; // Indicador visual mientras carga la data
  }
  if (info.length === 0) {
    return <div>No se encontraron resultados</div>;
  }

  return (
    <Box sx={{ background: "#1C1C1C", pt: 5, pb: 8, minHeight: "100vh" 
  }}>
      <Card
        sx={{
          width: "20em",
          m: "auto",
          background: "#424242",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{ textAlign: "center", pt: 2, color: "white" }}
          variant="h4"
          component="div"
        >
          {info.title}
        </Typography>
        <CardMedia
          component="img"
          sx={{ width: "10em", m: "auto", pt: 2 }}
          image={"https://image.tmdb.org/t/p/original/" + info.poster_path}
          alt={info.original_title}
        />
        <CardContent sx={{ color: "white", p: 3 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {info.genres.slice(0, 1).map((genero) => (
              <Typography gutterBottom variant="p" component="div">
                {genero.name}
              </Typography>
            ))}
            <Typography gutterBottom variant="p" component="div">
              <StarIcon sx={{ fontSize: 15, mb: 0.3 }}></StarIcon>{" "}
              {info.vote_average}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              {info.release_date}
            </Typography>
          </div>

          <Typography
            sx={{ pt: 1, textIndent: "10px" }}
            gutterBottom
            variant="p"
            component="div"
          >
            {info.overview}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
