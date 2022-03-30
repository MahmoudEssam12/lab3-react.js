import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../Network/productsAPI";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    getProductDetails(params.id + process.env.REACT_APP_APIKEY)
      .then((res) => {
        setMovie(res.data);
        console.log("data", res.data);
        console.log("movie", movie);
      })
      .catch((err) => console.log(err));
  }, [params.id]);
  return (
    <div className="container">
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {movie.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <span>Release Date:</span>{" "}
              <span className="text-primary">{movie.release_date}</span>
            </Typography>
            <Typography component="p">{movie.overview}</Typography>
            <Typography component="p">
              <span>Runtime: </span>
              <span className="text-primary">{movie.runtime}mins</span>
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
}

export default MovieDetails;
