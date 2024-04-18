// ABSTRACCIÓN PARA PODER APLICARLO A CUALQUIER ALMACENAMIENTO
export const saveDataInStorage = (key, item) => {
    //Conseguir los elementos del localstorage
    let items = JSON.parse(localStorage.getItem(key))
  
    //Comprobar si es un array
    if(Array.isArray(items)){
      //Añadimos un item nuevo dentro del array de localstorage
      items.push(item);
    }else{
      //Si no es un array lo creamos con el item nuevo
      items = [item]; 
    }
    //Guardar en el localstorage
    localStorage.setItem(key, JSON.stringify(items));
    //Devolver objeto guardado
    return item;   
  }; 


// ESTO ES LA FUNCIÓN LLAMANDO DIRECTAMENTE AL OBJETO FILM 

// const saveDataInStorage = film => {
//     //Conseguir los elementos del localstorage
//     let items = JSON.parse(localStorage.getItem("films"))
  
//     //Comprobar si es un array
//     if(Array.isArray(items)){
//       //Añadimos un item nuevo dentro del array de localstorage
//       items.push(film);
//     }else{
//       //Si no es un array lo creamos con el item nuevo
//       items = [film]; 
//     }

//     //Guardar en el localstorage
//     localStorage.setItem("films", JSON.stringify(items));

//     //Devolver objeto guardado
//     return film;   
//   }; 
