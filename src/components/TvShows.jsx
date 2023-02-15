import MoviesGallery from "./MoviesGallery";
import CustomTitle from "./CustomTitle";

const TvShows = () => {
  return (
    <div>
      <CustomTitle />
      <h4>The Walking Dead</h4>
      <MoviesGallery film="Walking Dead" />
      <h4>The Office</h4>
      <MoviesGallery film="The Office" />
      <h4>Scrubs</h4>
      <MoviesGallery film="Scrubs" />
    </div>
  );
};
export default TvShows;
