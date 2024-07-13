import { useAppDispatch, useAppSelector } from "../../store/forHooks";
import { useEffect } from "react";
import { fetchFilter } from "../../store/slices/moviesSlices";
import Movies from "../../Components/Movies/Movies";
import st from "./FilterGenres.module.css";
import { useParams } from "react-router-dom";
import Button from "../../Components/Buttons/Button";
const FilterGenre = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { filterGenre, page } = useAppSelector((state) => state.moviesSlices);

  useEffect(() => {
    dispatch(fetchFilter({ genreId: id, page }));
  }, [id, page, dispatch]);

  return (
    <div className={st.allHomePage}>
      <div className={st.home}>
        {filterGenre.map((el) => {
          return <Movies movies={el} key={el.id} />;
        })}
      </div>
      <div className={st.btn}>
        <Button />
      </div>
    </div>
  );
};

export default FilterGenre;
