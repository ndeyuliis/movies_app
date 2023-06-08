import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useMoviesContext} from "../MoviesProvider";


function Home() {
  const [search, setSearch] = useState("");
  const [ranking, setRanking] = useState();
  const [hover, setHover] = useState(-1);

  const movies = useMoviesContext();

  console.log(movies, "movies")

  function handleClick (info){
    console.log(info)
  }



  return (
    <Box sx={{ background: "white" }}>
      <Box sx={{ display: "flex" }}></Box>
      <Card sx={{ background: "#1C1C1C", p: 15 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 4 }}
          columns={{ xs: 1, sm: 8, md: 16 }}
        >
          {movies.map((mov) => (
            <Grid item xs={2} sm={3} md={4} key={mov.id}>
              <CardActionArea onClick={() => handleClick(mov)} sx={{ background: "#8A0808" }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={
                    "https://image.tmdb.org/t/p/original/" + mov.poster_path
                  }
                  alt={mov.original_title}
                />
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}

export default Home;
