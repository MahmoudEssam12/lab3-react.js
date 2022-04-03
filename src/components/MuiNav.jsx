import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { searchForMovie } from "../Network/productsAPI";
import MovieCard from "../components/MovieCard";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
function MuiNav() {
  const [checked, setChecked] = useState(false);
  const pages = ["home", "movies", "favourits"];
  const [searchResults, setSearchResults] = useState([]);
  let timer = "";

  const closeSearch = () => {
    setChecked(false);
  };

  const search = (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchForMovie(event.target.value)
        .then((res) => {
          setSearchResults(res.data.results);
          setChecked(true);
        })
        .catch((err) => console.log(err));
    }, 2000);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div className="nav-wrapper">
      <AppBar position="relative" sx={{ zIndex: 200 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>
                IMME
              </NavLink>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>
                IMME
              </NavLink>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <NavLink
                    style={{ color: "#ccc", textDecoration: "none" }}
                    to={`/${page}`}
                    activeClassName="activeLink"
                  >
                    {page}
                  </NavLink>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  onKeyUp={search}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <div className="search-results">
            <div className="container mt-5" style={{ position: "relative" }}>
              <IconButton
                aria-label="close"
                sx={{ position: "absolute", top: "-30px", right: "-64px" }}
                onClick={closeSearch}
              >
                <CloseIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <div className="row">
                {searchResults.map((movie) => (
                  <div className="col-4 mb-5" key={movie.id}>
                    <MovieCard movie={movie} closeSearch={closeSearch} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>
      </Box>
    </div>
  );
}

export default MuiNav;
