import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Link } from "react-router-dom";

function Favourits() {
  const favMovies = useSelector((state) => state.favourite);

  console.log(favMovies);
  return (
    <div className="favourit-wrapper">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              textAlign="left"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Favourits
            </Typography>
            <div>
              <FavoriteIcon /> <span>{favMovies.count}</span>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="container mt-4 mb-4">
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns:
              favMovies.favItems.length > 0 ? "repeat(3,1fr)" : "repeat(1,1fr)",
          }}
        >
          {favMovies.favItems.length > 0 ? (
            favMovies.favItems.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          ) : (
            <Alert severity="info" align="left" sx={{ fontSize: "1.3rem" }}>
              <AlertTitle sx={{ fontSize: "1.3rem" }}>Info</AlertTitle>
              Your favourite list is empty —{" "}
              <strong>
                Fav some <Link to="/movies">Movies</Link> and check again{" "}
              </strong>
            </Alert>
          )}
        </Box>
      </div>
    </div>
  );
}

export default Favourits;
