import React from "react";
import TaskList from "./components/TaskList"

function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold"> Mi lista de tareas</h1>
      </header>

      <main>
        <TaskList />
      </main>
    </div>
  )
}


export default App
