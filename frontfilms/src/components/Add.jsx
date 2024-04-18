import React from 'react'

export const Add = () => {
  return (
    <>
        <div className="add">
                <h3 className="title">Añadir película</h3>
                <form>
                    <input type="text" placeholder="Título"/>
                    <textarea placeholder="Descripción"></textarea>
                    <input type="submit" value="Guardar"/>
                </form>
            </div>
    </>
  )
}

export default Add; 