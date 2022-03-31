import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

function Favourits() {
  const favMovies = useSelector((state) => state);

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
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {favMovies.favItems.length > 0 ? (
            favMovies.favItems.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          ) : (
            <p
              className="text-center text-danger"
              style={{ fontSize: "1.2rem" }}
            >
              Favourit Movies is empty !
            </p>
          )}
        </Box>
      </div>
    </div>
  );
}

export default Favourits;
