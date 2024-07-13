import { useEffect } from "react";
// import genresSlices from "./store/slices/genresSlices";
import { useState } from "react";
import { fetchGenres } from "../../store/slices/genresSlices";
import { useAppDispatch, useAppSelector } from "../../store/forHooks";
import st from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { changeText, fetchSearch } from "../../store/slices/moviesSlices";
import { imageURL } from "../Movies/Movies";
const Nav = () => {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genresSlices);
  const { text, searchArray } = useAppSelector(
    (state) => state.moviesSlices
  );
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);
  useEffect(() => {
    if (text.length > 3) {
      dispatch(fetchSearch(text));
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [text, dispatch]);
  

  return (
    <nav>
      <div className={st.nav}>
        <NavLink to="/">
          <img
            src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-kino-logotip-na-prozrachnom-fone-16.png"
            alt=""
          />
        </NavLink>

        <div className={st.btn}>
          {genres.map((el) => {
            return (
              
                <button key={el.id}><NavLink to={`/genre/${el.id}`}>{el.name}</NavLink></button>
              
            );
          })}
        </div>
        <div className={st.searchPanel}>
          <input
            type="text"
            value={text}
            onChange={(e) => dispatch(changeText(e.target.value))}
          />
          {open && (
            <div className={st.popup}>
              {searchArray.map((el) => (
                <NavLink key={el.id} to={`/${el.id}`}>
                  <div className={st.searchResult}>
                    <img src={imageURL + el.backdrop_path} alt={el.title} />
                    <span>{el.title}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
