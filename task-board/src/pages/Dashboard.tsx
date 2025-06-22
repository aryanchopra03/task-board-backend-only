import { Link } from "react-router-dom";

function Dashboard() {
    return(
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Task Board Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                to="/taskboard"
                className="bg-blue-600 text-white rounded-xl p-6 shadow-md hover:bg-blue-700 transition"
                > 
                  View Tasks
                 </Link>

                 <Link
                 to="/add-task"
                 className="bg-green-600 text-white rounded-xl p-6 shadow-md hover:bg-green-700 transition"
                 >
                    Add New Task
                 </Link>

                 <Link
                 to="/edit/1"
                 className="bg-yellow-600 text-white rounded-xl p-6 shadow-md hover:bg-yellow-700 transition"
                 >
                    Edit Task
                 </Link>
            </div>
        </div>
    );
}

export default Dashboard;