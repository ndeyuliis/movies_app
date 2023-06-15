import { useContext, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useMoviesContext} from "../MoviesProvider";
import {InfoPelis} from "./infoPelis";
import {Link} from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  const [ranking, setRanking] = useState();
  const [hover, setHover] = useState(-1);
  const [info, setInfo] = useState(-1);


const labels = {
  1: 'Useless',
  2: 'Useless+',
  3: 'Poor',
  4: 'Poor+',
  5: 'Ok',
  6: 'Ok+',
  7: 'Good',
  8: 'Good+',
  9: 'Excellent',
  10: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

  const {movies, setMovies} = useMoviesContext();
  const handleRankingChange = (event, newValue) => {
    setRanking(newValue);
  };

  const filteredMovies = ranking !== null ? movies.find((mov) => mov.vote_average >= ranking) : <div> No se encontraron peliculas</div>;
  setRanking(filteredMovies)
  if(ranking !== undefined){
    setMovies(ranking)
  return (
    <Box sx={{ background: "white" }}>
           <Rating
        sx={{ background: "red"}}
        name="hover-feedback"
        value={ranking}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={handleRankingChange}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{  }} fontSize="inherit" />}
      />
      {ranking !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : ranking]}</Box>
      )}
      <Box sx={{ display: "flex" }}></Box>

      <Card sx={{ background: "#1C1C1C", p: 12 }}>
      <Grid
          container
          spacing={{ xs: 1, md: 4 }}
          columns={{ xs: 1, sm: 8, md: 16 }}
        >
          {movies.map((mov) => (
            <Grid item xs={2} sm={3} md={4} key={mov.id}>

              <CardActionArea sx={{ background: "#8A0808" }}>
              <Link className="infopeli-link"  to={ `/infopelis/${mov.id}`} state={{mov}}>

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
          ))}
        </Grid>
      </Card>
    </Box>
  );
                }else{
                  return (
                    <Box sx={{ background: "white" }}>
                           <Rating
                        sx={{ background: "red"}}
                        name="hover-feedback"
                        value={ranking}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={handleRankingChange}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{  }} fontSize="inherit" />}
                      />
                      {ranking !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : ranking]}</Box>
                      )}
                      <Box sx={{ display: "flex" }}></Box>
                
                      <Card sx={{ background: "#1C1C1C", p: 12 }}>
                      <Grid
                          container
                          spacing={{ xs: 1, md: 4 }}
                          columns={{ xs: 1, sm: 8, md: 16 }}
                        >
                          {movies.map((mov) => (
                            <Grid item xs={2} sm={3} md={4} key={mov.id}>
                
                              <CardActionArea sx={{ background: "#8A0808" }}>
                              <Link className="infopeli-link"  to={ `/infopelis/${mov.id}`} state={{mov}}>
                
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
                          ))}
                        </Grid>
                      </Card>
                    </Box>
                  );

                }
}

export default Home;
