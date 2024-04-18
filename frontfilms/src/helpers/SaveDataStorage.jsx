export const saveDataInStorage = film => {
    //Conseguir los elementos del localstorage
    let items = JSON.parse(localStorage.getItem("films"))
  
    //Comprobar si es un array
    if(Array.isArray(items)){
      //Añadimos un item nuevo dentro del array de localstorage
      items.push(film);
    }else{
      //Si no es un array lo creamos con el item nuevo
      items = [film]; 
    }

    //Guardar en el localstorage
    localStorage.setItem("films", JSON.stringify(items));

    //Devolver objeto guardado
    return film;   
  }; 