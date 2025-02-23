import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return;
    onAddTask(text.trim())
    setText("")
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='border p2 flex-1 rounded'
      />
      <button
        type='submit'
        className='px-4 bg-blue-600 text-white rounded'
      >
        Agregar
      </button>
    </form>
  )
}


