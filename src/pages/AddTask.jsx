import { Navbar } from "../components/Navbar"
import { TaskForm } from "../components/TaskForm"


export const AddTask = () => {
  return (
    <div>
      <Navbar></Navbar>

      <h1 style={{ display: "flex", justifyContent: "center", margin:"15px" }}>
        Add your task here
      </h1>

      <TaskForm/>
    </div>
  )
}
