import React, { useState } from 'react'
import { useTodo } from '../../providers/TodoProvider'

import './todoform.scss'

function TodoForm() {
  const { addItem } = useTodo()
  const [title, setTitle] = useState('')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const _title = title.trim()

    if (_title) {
      addItem(title)
      setTitle('')
    }
  }

  function hanleInputChange(event: React.ChangeEvent) {
    const target = event.target as HTMLInputElement
    setTitle(target.value)
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <div className="TodoFormContainer">
        <input
          className="TodoFormInput"
          name="title"
          placeholder="Title"
          value={title}
          onChange={hanleInputChange}
        />
      </div>
      <button className="TodoFormButton" type="submit">
        Add
      </button>
    </form>
  )
}

export default TodoForm
