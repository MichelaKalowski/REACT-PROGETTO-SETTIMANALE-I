import CustomTitle from "./CustomTitle";
import MoviesGallery from "./MoviesGallery";

const Home = () => {
  return (
    <>
      <CustomTitle />
      <h4>The Walking Dead</h4>
      <MoviesGallery film="Walking Dead" />
      <h4>The Office</h4>
      <MoviesGallery film="The Office" />
      <h4>Scrubs</h4>
      <MoviesGallery film="Scrubs" />
    </>
  );
};
export default Home;
