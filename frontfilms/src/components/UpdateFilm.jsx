import React from 'react'

export const UpdateFilm = ({film, getFilms, setEdit ,setListState}) => {
const updateTitle = "Update Film Data"
const saveEdit = (e,id) => {
  e.preventDefault();
  alert(id);

  //Conseguir el target del evento
  let target = e.target;

  //Buscar el indince(id) del objeto de la película a actualizar
  const filmsStorage = getFilms();
  const index = filmsStorage.findIndex(film => film.id === id);

  //Crear objeto con ese indice
  let updatedfilm = {
    id,
    title: target.title.value,
    sinopsis: target.sinopsis.value,
  };
  
  //Actualizar película
  filmsStorage[index] = updatedfilm; 
  console.log(filmsStorage)

  //Guardar actualización en el storage
  localStorage.setItem("films", JSON.stringify(filmsStorage));
  //Actualizar estados
  setListState(filmsStorage);
  setEdit(0);  
};

  return (
    <div className='update-form'>
        <h4 className='titleh3'>{updateTitle}</h4>
        <form onSubmit={e => saveEdit(e,film.id)}>
            <input type="text"
            name="title"
            className="edit-title"
            defaultValue={film.title}/>
            <textarea
            name="sinopsis"
            className="edit_sinopsis"
            defaultValue= {film.sinopsis} />
            <input type='submit'
            className="update" value="Update"/>
        </form>
    </div>
  )
}

export default UpdateFilm;  