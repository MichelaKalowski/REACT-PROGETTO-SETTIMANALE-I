//import React, { Component } from "react";
import { useNavigate, useState, useEffect } from "react-router-dom";
import { Spinner, Alert } from "react-bootstrap";

const MoviesGallery = (props) => {
  const [Search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?apikey=5e4cfe11&s=" + props.film
        );
        if (response.ok) {
          const data = await response.json();
          setSearch(data.Search);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setHasError(true);
          setErrorMessage(
            `Errore di caricamento dei contenuti, ERRORE:${response.status}`
          );
        }
      } catch (error) {
        console.log("error");
        setIsLoading(false);
        setHasError(true);
        setErrorMessage(`ERRORE FATALE: ${error.message}`);
      }
    };
    fetchFilm();
  }, [props.film]);

  return (
    <div>
      {hasError && <Alert variant="danger">{errorMessage}</Alert>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center mt-5 mx-4">
        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
          </div>
        )}
        {Search.filter((film) => film.Type === "series").map((film) => (
          <div className="col mb-2 px-1">
            <img className="img-fluid" src={film.Poster} alt={film.Title} />
            <button
              type="button"
              onClick={() => navigate("/single-movie-details/+film.imdbID")}
              className="movie-button"
            >
              Mostra Dettagli
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MoviesGallery;
