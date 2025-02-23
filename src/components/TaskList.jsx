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

  return (
    <div className='p-4 bg-gray-100 rounded shadow max-w-md mx-auto mt-8'>
      <h2 className='text-2xl font-bold mb-4'>Lista de tareas</h2>
      <TaskForm onAddTask={handleAddTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  )
}

export default TaskList
