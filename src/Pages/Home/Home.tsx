import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/forHooks";
import st from "./Home.module.css";
import { fetchMovies } from "../../store/slices/moviesSlices";
import Movies from "../../Components/Movies/Movies";

const Home = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.moviesSlices);
  console.log(movies);
  
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return <div className={st.home}>


    {
      movies.map((el)=>{
        return <Movies movies={el} key={el.id}/>
      })
    }
  </div>;
};

export default Home;
