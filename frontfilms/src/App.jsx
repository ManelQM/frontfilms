import "./index.css";
import { List } from "./components/List";
import { Search } from "./components/Search";
import { Add } from "./components/Add";

function App() {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis Películas</h1>
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Peliculas</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>

      <section className="content">
        <List />
      </section>

      <aside className="lateral">
        <Search />
        <Add />
      </aside>
      <footer className="footer">FOOTER</footer>
    </div>
  );
}

export default App;