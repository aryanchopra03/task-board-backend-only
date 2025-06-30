import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllTask } from "../api/TaskService";
import type { Task } from "../types/Task";

function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const location = useLocation();

    useEffect(() => {
        getAllTask()
           .then((data: Task[]) => setTasks(data))
           .catch((err: any) => console.error("Error fetching tasks", err));
           
    }, [location]);
    return(
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Task Board Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Link
                to="/tasks"
                className="bg-blue-600 text-white rounded-xl p-6 shadow-md hover:bg-blue-700 transition"
                > 
                  View Tasks
                 </Link>
        
                 <Link
                 to="/add"
                 className="bg-green-600 text-white rounded-xl p-6 shadow-md hover:bg-green-700 transition"
                 >
                    Add New Task
                 </Link>

                 
            </div>
            {/* View Task Section */}

            <div>
                <h2 className="text-xl font-semibold mb-4">Recent Tasks</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-900">
                    {tasks.length === 0 ?(
                        <div className="text-gray-500 italic"></div>
                    ) :  (
                        tasks.map((task) => (
                            <div key={task.id} className="bg-white p-4 rounded shadow">
                                <h3 className="font-bold">{task.title}</h3>
                                <p className="text-sm text-gray-600">{task.status}</p>

                                <Link 
                                to={`/edit/${task.id}`}
                                className="text-blue-600 mt-2 inline-block hover:underline"
                                >
                                    Edit
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;