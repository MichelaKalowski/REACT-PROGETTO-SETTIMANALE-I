import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();

  useEffect(() => {}, [params.movieId]);

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
