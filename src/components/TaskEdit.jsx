import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

export const TaskEdit = ({ task, onClose }) => {
  const editTask = useTaskStore((state) => state.editTask);

  const [form, setForm] = useState({
    title: task.title,
    description: task.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title) {
      alert("Title is required");
      return;
    }
    if (!form.description) {
      alert("Description is required");
      return;
    }
    editTask(task.id, {
      title: form.title,
      description: form.description,
    });
    onClose();
  };

  return (
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
      <div style={{ marginBottom: "16px", width: "100%" }}>
        <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "16px", width: "100%" }}>
        <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
          Description:
        </label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <button type="submit" style={{ marginRight: "10px" }}>
          Save
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};
