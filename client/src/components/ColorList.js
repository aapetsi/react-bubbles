import React, { useState } from 'react'
import { axiosWithAuth } from '../axiosWithAuth'

const initialColor = {
  color: '',
  code: { hex: '' }
}

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false)
  const [colorToEdit, setColorToEdit] = useState(initialColor)

  const editColor = color => {
    setEditing(true)
    setColorToEdit(color)
  }

  const saveEdit = e => {
    e.preventDefault()
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    const colorName = e.target.elements[0].value
  }

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then(res => {
        // history.push('/bubble-page')
        console.log(res.data)
        axiosWithAuth()
          .get('/colors')
          .then(res => {
            updateColors([...res.data])
            console.log(res.data)
          })
          .catch(err => {
            console.log(err)
          })
        // window.location.reload()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                <button>x</button>
              </span>{' '}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  )
}

export default ColorList
