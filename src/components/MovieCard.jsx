import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function MovieCard({ movie }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography color="primary">{movie.vote_average}</Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview.substring(0, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/moviedetails/${movie.id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
