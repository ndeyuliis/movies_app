import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useMoviesContext } from "../MoviesProvider";
import { Link } from "react-router-dom";

function Home() {
  const [ranking, setRanking] = useState(null);
  const [hover, setHover] = useState(-1);

  const labels = {
    2: "2",
    4: "4",
    6: "6",
    8: "8",
    10: "10",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const { movies } = useMoviesContext();

  const handleRankingChange = (event, newValue) => {
    setRanking(newValue * 2);
  };

  const filteredMovies =
    ranking !== null
      ? movies.filter(
          (mov) =>
            mov.vote_average <= ranking && mov.vote_average >= ranking - 2
        )
      : movies;

  console.log(filteredMovies);

  return (
    <Box sx={{ background: "white" }}>
      <Box sx={{ display: "flex" }}></Box>

      <Card sx={{ background: "#1C1C1C", minHeight: "100vh" }}>
        <Rating
          name="hover-feedback"
          value={ranking / 2}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={handleRankingChange}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={
            <StarIcon
              style={{ color: "white", opacity: 0.2 }}
              fontSize="inherit"
            />
          }
        />

        <Grid
          sx={{ p: 10 }}
          container
          spacing={{ xs: 1, md: 4 }}
          columns={{ xs: 1, sm: 8, md: 16 }}
        >
          {filteredMovies.length > 0 ? (
            filteredMovies.map((mov) => (
              <Grid item xs={2} sm={3} md={4} key={mov.id}>
                <CardActionArea sx={{ background: "#8A0808" }}>
                  <Link
                    className="infopeli-link"
                    to={`/infopelis/${mov.id}`}
                    state={{ mov }}
                  >
                    <CardMedia
                      component="img"
                      height="100%"
                      image={
                        "https://image.tmdb.org/t/p/original/" + mov.poster_path
                      }
                      alt={mov.original_title}
                    />
                  </Link>
                </CardActionArea>
              </Grid>
            ))
          ) : (
            <></>
          )}
        </Grid>
      </Card>
    </Box>
  );
}

export default Home;
