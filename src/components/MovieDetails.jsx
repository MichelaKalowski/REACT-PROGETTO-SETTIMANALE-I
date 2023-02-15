import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=5e4cfe11&i=tt1520211"
        );
        if (response.ok) {
          const data = await response.json();
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setHasError(true);
          setErrorMessage(
            `Errore Caricamento dei contenuti, ERRORE:${response.status}`
          );
        }
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
        setErrorMessage(`FATAL ERROR:${error.message}`);
      }
    };
    fetchFilm();
  }, [params.movieId]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h3>Sono in MovieDetail</h3>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
