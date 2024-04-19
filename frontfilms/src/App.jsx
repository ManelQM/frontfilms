// import "./index.css";
import { List } from "./components/List";
import { Search } from "./components/Search";
import { Add } from "./components/Add";
import { useState } from "react";

function App() {
  
  const [listState, setListState] = useState([]);

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
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Peliculas</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>  
      <section className="content">
        <List listState={listState} setListState={setListState} />
      </section>

      <aside className="lateral">
        <Search listState={listState} setListState={setListState}/>
        <Add setListState={setListState}/>
      </aside>
      <footer className="footer">FOOTER</footer>
    </div>
  );
}

export default App;
