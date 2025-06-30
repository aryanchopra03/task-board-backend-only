import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskBoard from './pages/TaskBoard';
import AddTask from  './pages/AddTask';
import Home from './pages/Home';
import EditTask from './pages/EditTask';
import Dashboard from './pages/Dashboard';

function App(){
  return (
    <Router>
      <div className="min-h-screen w-full">
        <nav className="bg-gray-800 text-white p-4 flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/tasks">Task Board</Link>
          <Link to="/add">Add Task</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </nav>


        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tasks" element={<TaskBoard />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<EditTask/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;