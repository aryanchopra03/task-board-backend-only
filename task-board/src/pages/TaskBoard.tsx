import { useEffect, useState } from "react";
import {getAllTask} from '../api/TaskService';
import "../index.css";


type Task = {
  id: number;
  title: string;
  status: string;

};

function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {

    getAllTask() 
       .then((data: Task[]) => setTasks(data))
       .catch((err: any) => console.error('Error fetching tasks', err));
  },[]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task Board</h1>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map(task => (
          <div key={task.id} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">{task.title}</h2>
            <p className="text-sm text-gray-600">{task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;