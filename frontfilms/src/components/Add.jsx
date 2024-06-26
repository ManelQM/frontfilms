import React, { useState } from 'react'
import { saveDataInStorage } from '../helpers/SaveDataStorage';

export const Add = ({setListState}) => {
  const addFilm = "Add film"; 
  //Guardar información en el estado del componente
  const [filmState, setFilmState] = useState({
    title: "",
    sinopsis: "",
  }); 

  const {title , sinopsis} = filmState; 

  const getDataForm = e => {
    e.preventDefault(); 

    //Conseguir datos formulario
    let target = e.target; 
    let title = target.title.value;
    let sinopsis = target.sinopsis.value; 
    // alert(title + "-" + sinopsis)

    let film = {
      id: new Date().getTime(),
      title,
      sinopsis,
    };
    // Guardar estado
    setFilmState(film);
    
    setListState(items => {
      return[...items, film];
    });
    //Llamamos al función para guardar en localstorage
    saveDataInStorage("films",film); 
    saveDataInStorage("copia datos", film);

  };

  return (
    
        <div className="add">
                <h3 className="title">{addFilm}</h3>
                <strong>
                {(title && sinopsis) && "Film added:" + filmState.title}
                </strong>
                <form onSubmit={getDataForm}>
                    <input type="text"
                            id='title' 
                            name='title'
                           placeholder="Título"/>
                    <textarea id='sinopsis'
                              name='sinopsis'
                              placeholder="Descripción">       
                    </textarea>
                    <input type="submit" value="Guardar"/>
                </form>
            </div>
  )
}

export default Add; 