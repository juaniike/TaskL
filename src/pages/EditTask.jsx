import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import { TaskEdit } from "../components/TaskEdit";
import { Navbar } from "../components/Navbar";

export const EditTask = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const [editingTask, setEditingTask] = useState(null);

  return (
    <>
      <Navbar />
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "0 16px" }}>

      {editingTask ? (
        <TaskEdit
          task={editingTask}
          onClose={() => setEditingTask(null)}
        />
      ) : (
        <>
          {tasks.length === 0 && (
            <p style={{ display: "flex", justifyContent: "center", fontStyle: "italic", color: "#666" }}>
              There are no tasks.
            </p>
          )}
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                backgroundColor:"white",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "12px 16px",
                marginBottom: "12px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginBottom: "8px" }}>{task.title}</h3>
              <p style={{ marginBottom: "12px", color: "#555" }}>{task.description}</p>
              <button
                onClick={() => setEditingTask(task)}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </>
      )}
    </div>
</>
  );
};
