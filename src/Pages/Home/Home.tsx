import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/forHooks";
import st from "./Home.module.css";
import { fetchMovies } from "../../store/slices/moviesSlices";
import Movies from "../../Components/Movies/Movies";
import Button from "../../Components/Buttons/Button";
const Home = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.moviesSlices);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const { page } = useAppSelector((state) => state.moviesSlices);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchMovies(page));
  }, [page]);

  return (
    <div className={st.allHomePage}>
      <div className={st.home}>
        {movies.map((el) => {
          return <Movies movies={el} key={el.id} />;
        })}
      </div>
      <div className={st.btn}>
        <Button />
      </div>
    </div>
  );
};

export default Home;
