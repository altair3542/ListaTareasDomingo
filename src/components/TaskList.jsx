import {useState} from 'react'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'

function TaskList() {
  const [tasks, setTasks] = useState([
    { id:1, text: "Estudiar React", completed: false},
    { id:2, text: "Probar Tailwind", completed: true},
  ])

  //agregar tarea
  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTasks((prev) => [...prev, newTask])
  }

  // toggle de completar.
  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Eliminar tarea
  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }
}
