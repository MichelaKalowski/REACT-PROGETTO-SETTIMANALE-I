import { Card } from "react-bootstrap";

const SingleMovieDetails = () => {
  return (
    <Card>
      <Card.Img variant="top" src={film.Poster} />
      <Card.Body>
        <Card.Title>{film.Title}</Card.Title>
        <Card.Text>{film.Plot}</Card.Text>
        <Card.Text>{film.Actors}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Card;
