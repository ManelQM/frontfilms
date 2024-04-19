import React, { useEffect, useState } from "react";
import UpdateFilm from "./UpdateFilm";

export const List = ({listState, setListState}) => {
//   const [listState, setListState] = useState([]);

const [edit, setEdit] = useState([]); 

  useEffect(() => {
    console.log("componente cargado");
    getFilms();
  }, []);

  const getFilms = () => {
    let filmsToGet = JSON.parse(localStorage.getItem("films"));
    setListState(filmsToGet);
    return filmsToGet;
  };
  const deleteFilm = (id) => {
    //Conseguir películas almacenadas 
    let filmsStorage = getFilms();
    //Filtrar esas películas para que elimine la película seleccionada
    let newFilmsStorage = filmsStorage.filter(film => film.id !== parseInt(id));
    //Actualizar estado del listado 
    setListState(newFilmsStorage); 
    //Actualizar los datos en el localstorage
    localStorage.setItem("films", JSON.stringify(newFilmsStorage));
  }
 
  return (
    <>
      {listState != null ?  
      listState.map((film) => {
        return (
          <article key={film.id} className="film-item">
            <h3 className="title">{film.title}</h3>
            <p className="description">{film.sinopsis}</p>

            <button className="edit" onClick={()=> setEdit(film.id)}>Editar</button>
            <button className="delete" onClick={() => deleteFilm(film.id)}>Borrar</button>

            {/*Aparece formulario de editar*/}
            {edit === film.id && (
                <UpdateFilm film = {film} 
                            getFilms={getFilms}
                            setEdit = {setEdit}
                            setListState = {setListState} />
            )}
          </article>
        );
      })
      : <h2>No hay películas guardadas</h2>
    };
    </>
  );
};

export default List;
