import { useNavigate } from "react-router-dom";
import { useTaskStore } from "../store/useTaskStore";
import { Navbar } from "../components/Navbar";
import { Api } from "../api/Api";


export const Home = () => {
  const navigate = useNavigate();
  const tasks = useTaskStore((state) => state.tasks);

  const pendingTasksCount = tasks.filter(task => !task.done).length;

  return (
    <div>
      <Navbar />

      <section style={{ textAlign: "center", padding: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Task Manager
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Organize your ideas. Control your day.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button
            style={{ margin: "10px", padding: "10px 20px" }}
            onClick={() => navigate("/details")}
          >
            View my tasks
          </button>
          <button
            style={{ margin: "10px", padding: "10px 20px" }}
            onClick={() => navigate("/add")}
          >
            Create new task
          </button>
        </div>

        {tasks.length > 0 && (
          <div style={{ marginTop: "40px", color: "#333" }}>
            <h3>¡You already have {tasks.length} task(s) created!</h3>
          </div>
        )}

        {pendingTasksCount > 0 && (
          <div style={{ marginTop: "40px", color: "#333" }}>
            <h3>You have {pendingTasksCount} pending task{pendingTasksCount > 1 ? 's' : ''}!</h3>
          </div>
        )}
      </section>

      <Api/>
    </div>
  );
};
