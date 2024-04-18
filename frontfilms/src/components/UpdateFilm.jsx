import React from 'react'

export const UpdateFilm = () => {
const updateTitle = "Update Title!!!"
  return (
    <div className='update-form'>
        <h4 className='titleh3'>{updateTitle}</h4>
        <form>
            <input type="text"
            name="title"
            className="edit-title"
            defaultValue="Original title"/>
            <textarea
            name="sinopsis"
            className="edit_sinopsis"
            defaultValue="Original Sinopsis"/>
            <input type='submit'
            className="update" value="Update"/>
        </form>
    </div>
  )
}

export default UpdateFilm;  