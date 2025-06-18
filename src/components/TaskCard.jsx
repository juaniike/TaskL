import { useTaskStore } from "../store/useTaskStore";
import { Link } from "react-router-dom";

export const TaskCard = ({ task }) => {
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const toggleDone = useTaskStore((state) => state.toggleDone);

  return (
    <li
      style={{
        listStyle: "none",
        border: "1px solid #ccc",
        marginBottom: "12px",
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: task.done ? "#28a745" : "white",
        color: task.done ? "white" : "black",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        maxWidth: "480px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h3 style={{ textDecoration: task.done ? "line-through" : "none", marginBottom: "8px" }}>
        {task.title}
      </h3>
      <p style={{ marginBottom: "16px" }}>{task.description}</p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold" }}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleDone(task.id)}
            style={{ width: "18px", height: "18px" }}
          />
          Done
        </label>

        <button
          onClick={() => deleteTask(task.id)}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "8px 12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
