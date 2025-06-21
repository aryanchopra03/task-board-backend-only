import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskBoard from './pages/TaskBoard';
import AddTask from  './pages/AddTask';
import Home from './pages/Home';
import EditTask from './pages/EditTask';

function App(){
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/">Task Board</Link>
        <Link to="/">Add Task</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tasks" element={<TaskBoard />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask/>} />
      </Routes>
    </Router>
  );
}

export default App;