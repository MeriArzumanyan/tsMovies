import Nav from "./Components/Nav/Nav";
import "./App.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/forHooks";
// import genresSlices from "./store/slices/genresSlices";
import { fetchGenres } from "./store/slices/genresSlices";
function App() {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genresSlices);
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <div className="container">
      <Nav genres={genres}/>
    </div>
  );
}

export default App;
