import { useState } from "react"

interface Props {
  onAddTask: (title: string) => void
}

function TaskForm({ onAddTask }: Props) {
  const [title, setTitle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onAddTask(title)
    setTitle("")
  }

  return (
  <form className="task-form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Nueva tarea"
      value={title}
      onChange={e => setTitle(e.target.value)}
    />
    <button>Agregar</button>
  </form>
)

}

export default TaskForm