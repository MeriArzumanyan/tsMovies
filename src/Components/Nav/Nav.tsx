import { useEffect } from "react";
// import genresSlices from "./store/slices/genresSlices";
import { fetchGenres } from "../../store/slices/genresSlices";
import { useAppDispatch, useAppSelector } from "../../store/forHooks";
import st from "./Nav.module.css";

const Nav = () => {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genresSlices);
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <nav>
      <div className={st.nav}>
        <img src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-kino-logotip-na-prozrachnom-fone-16.png" alt="" />
        <div className={st.btn}>
          {genres.map((el) => {
            return <button key={el.id}>{el.name}</button>;
          })}
        </div>

        <input type="text" />
      </div>
    </nav>
  );
};

export default Nav;
