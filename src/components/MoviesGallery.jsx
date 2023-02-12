import { Component } from "react";
//import Card from "react-bootstrap/Card";

class MoviesGallery extends Component {
  state = {
    Search: [],
  };
  fetchFilm = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=5e4cfe11&s=" + this.props.film
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          Search: data.Search,
        });
        console.log(this.state.Search);
      } else {
      }
    } catch (error) {
      console.log("error");
    }
  };
  componentDidMount() {
    this.fetchFilm();
  }
  render() {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center mt-3 mx-4">
        {this.state.Search.filter((film) => film.Type === "series").map(
          (film) => (
            <div class="col mb-2 px-1">
              <img class="img-fluid" src={film.Poster} alt={film.Title} />
            </div>

            /*<Card className="col-sm-6 col-md-3 col-lg-2 mb-3 px-1">
              <Card.Img variant="top" src={film.Poster} />
              <Card.Body>
                <Card.Title>{film.Title}</Card.Title>
                <Card.Text>Anno:{film.Year}</Card.Text>
              </Card.Body>
            </Card>*/
          )
        )}
      </div>
    );
  }
}
export default MoviesGallery;
