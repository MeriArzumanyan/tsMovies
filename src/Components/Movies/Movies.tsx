import { Typeofresults } from "../../store/slices/moviesSlices";
import { NavLink } from "react-router-dom";
import st from "./Movies.module.css";
export const imageURL = "https://image.tmdb.org/t/p/w500/";
interface TypeofMoviesFromHome {
  movies: Typeofresults;
}

const Movies = ({ movies }: TypeofMoviesFromHome) => {
  return (
    <div className={st.movies}>
      <img src={imageURL + movies.backdrop_path} alt={movies.title} />

      <div className={st.title}>
        <NavLink to={`/${movies.id}`}>
          <h3>{movies.title}</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Movies;
