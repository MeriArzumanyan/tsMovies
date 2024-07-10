import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/forHooks";
import { fetchMovie } from "../../store/slices/moviesSlices";
import { imageURL } from "../../Components/Movies/Movies";
import st from "./Unique.module.css";
const Unique = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { oneMovie } = useAppSelector((state) => {
    return state.moviesSlices;
  });
  useEffect(() => {
    dispatch(fetchMovie(id));
  }, []);
  return (
    <div className={st.oneMoviePage}>
      <div className={st.movie}>
        <img src={imageURL + oneMovie?.backdrop_path} alt="" />
        <div className={st.title}>
        <h3>{oneMovie?.title}</h3>
        </div>
        
      </div>
      <div className={st.about}>
      <h4>Description</h4>
      <p>{oneMovie?.overview}</p>
      </div>
    
    </div>
  );
};

export default Unique;
