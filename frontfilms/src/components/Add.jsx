import React, { useState } from 'react'

export const Add = () => {
  const addFilm = "Add film"; 
  //Guardar información en el estado del componente
  const [filmState, setFilmState] = useState({
    title: "",
    sinopsis: "",
  }); 

  const {title , sinopsis} = filmState; 

  const getDataForm = e => {
    e.preventDefault(); 

    //Conseguir datos form 
    let target = e.target; 
    let title = target.title.value;
    let sinopsis = target.sinopsis.value; 
    // alert(title + "-" + sinopsis)

    let film = {
      id: new Date().getTime(),
      title,
      sinopsis,
    };

    setFilmState(film);
    console.log(filmState);
  }
  return (
    
        <div className="add">
                <h3 className="title">{addFilm}</h3>
                <strong>
                {(title && sinopsis ) && "Film added:" + filmState.title}
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