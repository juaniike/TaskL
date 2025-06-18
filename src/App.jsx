
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddTask } from "./pages/AddTask"
import { EditTask } from "./pages/EditTask"
import { TaskDetail } from "./pages/TaskDetail";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css"


function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit" element={<EditTask />} />
          <Route path="/details" element={<TaskDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
