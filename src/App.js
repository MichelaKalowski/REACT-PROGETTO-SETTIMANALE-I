import "bootstrap/dist/css/bootstrap.min.css";


import "./App.css";

import CustomNavBar from "./components/CustomNavBar";
//import CustomTitle from "./components/CustomTitle";
//import MoviesGallery from "./components/MoviesGallery";
import CustomFooter from "./components/CustomFooter";
import NotFound from "./components/NotFound";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <CustomNavBar/>
      <Routes>
      <Route path="/tv-shows"element={<TvShows/>}/>
      <Route path="/movie-details/:movieId"element={<MovieDetails/>}/>
      <Route path="*"element={<NotFound spacings="mt-3 pt-5"/>} />
     </Routes>
     <CustomFooter/>
     </BrowserRouter>
    </>
  );
}

export default App;


