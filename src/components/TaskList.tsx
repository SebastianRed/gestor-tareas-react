import type { Task } from "../types/Task"

interface Props {
  tasks: Task[]
  onToggleTask: (id: number) => void
}

function TaskList({ tasks, onToggleTask }: Props) {
  if (tasks.length === 0) {
    return <p>No hay tareas aún</p>
  }

  if (tasks.length === 0) {
  return <p className="empty-text">No hay tareas aún</p>
}

return (
  <ul className="task-list">
    {tasks.map(task => (
      <li key={task.id} className="task-item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span
          className={`task-title ${task.completed ? "completed" : ""}`}
        >
          {task.title}
        </span>
      </li>
    ))}
  </ul>
)

}

export default TaskList