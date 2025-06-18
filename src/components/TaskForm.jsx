import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

export const TaskForm = () => {
  const [form, setForm] = useState({ title: "", description: "" });
  const addTask = useTaskStore((state) => state.addTask);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title) {
      alert("You need to add a title to the task");
      return;
    }
    if (!form.description) {
      alert("You need to add a description to the task");
      return;
    }

    addTask({
      title: form.title,
      description: form.description,
    });

    setForm({ title: "", description: "" });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "20px auto",
          padding: "20px",
          maxWidth: "400px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f8f9fa",
        }}
      >
        {/* Titulo de la tarea */}
        <div style={{ marginBottom: "16px", width: "100%" }}>
          <label
            style={{
              display: "block",
              marginBottom: "4px",
              fontWeight: "bold",
            }}
          >
            Task title here:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter a new task title"
            onChange={handleChange}
            value={form.title}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Titulo de la tarea */}
        <div style={{marginBottom: "16px", width: "100%"}}>
        <label style={{ margin: "10px" }} htmlFor="description">
          Task description here:
        </label>
        <input
          type="text"
          name="description"
          placeholder="Enter task description"
          onChange={handleChange}
          value={form.description}
                      style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
        />
        </div>
        {/* Botón para agregar tarea */}
        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <button style={{ marginRight: "10px" }} type="submit">
          Add Task!
        </button>
        </div>
      </form>
    </div>
  );
};
