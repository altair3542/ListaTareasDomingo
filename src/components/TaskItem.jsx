import React from "react";

function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <li className="flex items-center justify-between mb-2 p-2 bg-white rounded shadow">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span className={task.completed ? "line-through": ""}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Eliminar
      </button>
    </li>
  )
}

export default TaskItem
