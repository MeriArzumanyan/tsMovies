import { Typeofresults } from "../../store/slices/moviesSlices";
import st from "./Movies.module.css";
const imageURL = "https://image.tmdb.org/t/p/w500/";
interface TypeofMoviesFromHome {
  movies: Typeofresults;
}
const Movies = ({ movies }: TypeofMoviesFromHome) => {
  return (
    <div className={st.movies}>
      <img src={imageURL + movies.backdrop_path} alt="" />

      <div className={st.title}>
        <h3>{movies.title}</h3>
      </div>
    </div>
  );
};

export default Movies;
