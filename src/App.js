import "bootstrap/dist/css/bootstrap.min.css";


import "./App.css";

import CustomNavBar from "./components/CustomNavBar";

import CustomFooter from "./components/CustomFooter";
import NotFound from "./components/NotFound";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";
import SingleMovieDetails from "./components/SingleMovieDetails"

import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <CustomNavBar/>
      <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/tv-shows"element={<TvShows/>}/>
      <Route path="/movie-details/:movieId"element={<MovieDetails/>}/>
      <Route path="*"element={<NotFound spacings="mt-3 pt-5"/>} />
    <Route path="/single-movie-details"element={<SingleMovieDetails/>}/>
     </Routes>
     
     <CustomFooter/>
     </BrowserRouter>
    </>
  );
}

export default App;


