import { useTaskStore } from "../store/useTaskStore";
import { TaskCard } from "../components/TaskCard";
import { Navbar } from "../components/Navbar";

export const TaskDetail = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>All Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          <ul style={{ listStyle: "none", padding: "0" }}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
