import { useState } from "react"
import type { Task } from "./types/Task"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return (
  <div className="app-container">
    <h1>Gestor de Tareas</h1>
    <TaskForm onAddTask={addTask} />
    <TaskList tasks={tasks} onToggleTask={toggleTask} />
  </div>
)
}

export default App