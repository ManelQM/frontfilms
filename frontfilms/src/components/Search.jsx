import React, { useState } from "react";

export const Search = ({ listState, setListState }) => {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const searchFilm = (e) => {
    //Crear estado y actualizarlo
    setSearch(e.target.value);
    //Listado completo de películas
    //Filtrar para buscar coincidencias
    let findFilm = listState.filter((film) => {
      return film.title.toLowerCase().includes(search.toLocaleLowerCase()); //comprueba en cada uno de los casos si hay coincidencia
    });
    //Comprobar si hay un resultado
    if (search.length <= 1 || findFilm <= 0) {
      findFilm = JSON.parse(localStorage.getItem("films"));
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    //Actualizar estado del listado principal con lo que he logrado filtrar
    setListState(findFilm);
  };
  return (
    <>
      <div className="search">
        <h3 className="title">Buscador : {search}</h3>
        {(notFound == true && search.length > 1) &&(
          <span className="not-found">
            No se ha encotrado ninguna coincidencia
          </span>
        )}

        <form>
          <input
            type="text"
            name="search"
            autoComplete="off"
            value={search}
            onChange={searchFilm}
          />
          <button>Buscar</button>
        </form>
      </div>
    </>
  );
};

export default Search;
