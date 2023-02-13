import "bootstrap/dist/css/bootstrap.min.css";


import "./App.css";

import CustomNavBar from "./components/CustomNavBar";
import CustomTitle from "./components/CustomTitle";
import MoviesGallery from "./components/MoviesGallery";
import CustomFooter from "./components/CustomFooter";
/*import Error from "./components/Error";
import Loading from "./components/Loading";*/

function App() {
  return (
    <>
      <CustomNavBar/>
      <CustomTitle/>
      <h4>The Walking Dead</h4><MoviesGallery  film="Walking Dead"/>
      <h4>The Office</h4><MoviesGallery  film="The Office"/>
      <h4>Scrubs</h4><MoviesGallery film="Scrubs"/>
     <CustomFooter/>
      
    </>
  );
}

export default App;


