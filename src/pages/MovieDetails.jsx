import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getProductDetails } from "../Network/productsAPI";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import languageContext from "../context/language";
function MovieDetails() {
  const { langContext } = useContext(languageContext);

  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const params = useParams();
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  useEffect(() => {
    getProductDetails(params.id + process.env.REACT_APP_APIKEY, langContext)
      .then((res) => {
        setMovie(res.data);
        setGenres(res.data.genres);
      })
      .catch((err) => console.log(err));
  }, [params.id, langContext]);
  return (
    <div className="container">
      <Card sx={{ display: "flex", my: 3 }}>
        <IconButton
          aria-label="go back"
          sx={{ alignSelf: "start", margin: "1rem" }}
          onClick={goBack}
        >
          <ArrowBackIcon />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" sx={{ my: 3 }} align="left">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography component="p" variant="h4">
                  {movie.title}
                </Typography>
                <Typography component="p" variant="h5">
                  <StarIcon
                    fontSize="large"
                    sx={{ color: "gold", marginBottom: "8px" }}
                  />
                  {movie.vote_average}
                </Typography>
              </Box>
              <CardHeader subheader={movie.tagline} sx={{ p: 1 }} />
              <Typography
                color="text.secondary"
                component="div"
                align="left"
                variant="subtitle2"
              >
                <span>Release Date:</span>{" "}
                <span className="text-primary">{movie.release_date}</span>
              </Typography>
              <Typography
                color="text.secondary"
                component="div"
                align="left"
                variant="subtitle2"
              >
                <span>Genres: </span>{" "}
                {genres.map((genre) => (
                  <span className="text-primary" key={genre.id}>
                    {genre.name},{" "}
                  </span>
                ))}
              </Typography>
            </Typography>

            <Typography
              component="div"
              align="left"
              sx={{ display: "flex", gap: "10px", mb: 2 }}
            >
              <Typography component="span" variant="h6">
                Plot:
              </Typography>
              <Typography component="p" sx={{ marginTop: "5px" }}>
                {movie.overview}
              </Typography>
            </Typography>
            <Typography component="p" align="left">
              <Typography component="span" variant="h6">
                Runtime:{" "}
              </Typography>
              <span className="text-primary">{movie.runtime}mins</span>
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          sx={{ maxHeight: "500px" }}
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
}

export default MovieDetails;
