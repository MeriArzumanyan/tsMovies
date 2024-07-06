import st from "./Nav.module.css";
const Nav = () => {
  return (
    <nav>
      <div className={st.nav}>
        <h1>Logo</h1>
        <button>Genres</button>
        <input type="text" />
      </div>
    </nav>
  );
};

export default Nav;
