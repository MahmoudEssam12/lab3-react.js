import React, { useState, useEffect, useContext } from "react";
import { getProducts } from "../Network/productsAPI";
import MovieCard from "../components/MovieCard";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, previousPage } from "./../store/actions/pagination";
import languageContext from "../context/language";

function Movies() {
  const pageNumber = useSelector((state) => state.pagination.page_num);
  const dispatch = useDispatch();

  const { langContext, setLangContext } = useContext(languageContext);
  const changeLang = () => {
    setLangContext(langContext === "ar" ? "en" : "ar");
  };
  // const url = `/movie/popular${process.env.REACT_APP_APIKEY}?page=${pageNumber}`;

  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);

  const next = () => {
    dispatch(nextPage());
  };
  const prev = () => {
    dispatch(previousPage());
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    getProducts(pageNumber, langContext)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, langContext]);
  return (
    <div className="container mt-5">
      <Button variant="contained" sx={{ my: 2 }} onClick={changeLang}>
        Change language from {langContext}
      </Button>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-4 mb-5" key={movie.id}>
            <MovieCard movie={movie} faved={handleClick} />
          </div>
        ))}
      </div>
      <div
        className="pagination"
        style={{ padding: "2rem", display: "flex", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          disabled={pageNumber <= 1 ? true : false}
          sx={{ mx: 2 }}
          onClick={prev}
        >
          prev
        </Button>
        <Button variant="contained" onClick={next}>
          next
        </Button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        severity="success"
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Added to favourit
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Movies;
