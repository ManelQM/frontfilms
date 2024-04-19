import React, { useState } from 'react'

export const Search = ({listState, setListState}) => {
  const [search, setSearch] = useState(""); 
  const searchFilm = (e) => {
    //Crear estado y actualizarlo
    setSearch(e.target.value); 
    //Listado completo de películas
    //Filtrar para buscar coincidencias
    let findFilm = listState.filter(film => {
      return film.title.toLowerCase().includes(search.toLocaleLowerCase()); //comprueba en cada uno de los casos si hay coincidencia
    })
     
    if(search.length <= 1){
      findFilm = JSON.parse(localStorage.getItem("films")); 
    }
    //Comprobar si hay un resultado 
    
    //Actualizar estado del listado principal con lo que he logrado filtrar
    setListState(findFilm); 
  }
  return (
    <> 
      <div className="search">
                <h3 className="title">Buscador : {search}</h3>
                <form>
                    <input type="text"
                    name='search'
                    autoComplete='off'
                    value={search}
                    onChange={searchFilm}/>
                    <button>Buscar</button>
                </form>
            </div>
    </>
  )
}

export default Search; 