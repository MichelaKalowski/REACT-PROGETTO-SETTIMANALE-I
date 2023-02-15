import { Component } from "react";

import { Spinner } from "react-bootstrap";

class MoviesGallery extends Component {
  state = {
    Search: [],
    isLoading: true,
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
          isLoading: false,
        });
        console.log(this.state.Search);
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `Errore Caricamento dei contenuti, ERRORE:${response.status}`,
        });
      }
    } catch (error) {
      console.log("error");
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `FATAL ERROR:${error.message}`,
      });
    }
  };
  componentDidMount() {
    this.fetchFilm();
  }
  render() {
    return (
      /*{this.state.hasError &&<Alert variant="danger">{this.state.errorMessage}</Alert}*/

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center mt-5 mx-4">
        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
          </div>
        )}
        {this.state.Search.filter((film) => film.Type === "series").map(
          (film) => (
            <div class="col mb-2 px-1">
              <img class="img-fluid" src={film.Poster} alt={film.Title} />
            </div>
          )
        )}
      </div>
    );
  }
}
export default MoviesGallery;
