import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getTaskById, updateTask} from "../api/TaskService";
import {updateTask as updateTaskAPI} from '../api/TaskService';
import type { Task, TaskStatus } from "../types/Task";


const EditTask = () => {
    const { id } = useParams<{id: string }>();
    const navigate = useNavigate();
    const [task, setTask ] = useState<Task | null >(null);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState<TaskStatus>("To Do");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (id) {
            getTaskById(Number(id))
            .then((data: Task) => {
                setTask(data);
                setTitle(data.title);
                setStatus(data.status);
                setDescription(data.description);
            })
            .catch((error: any) => {
                console.error("Failed to fetch task", error);
            });
        }
    }, [id]);

    const handleUpdate = () => {
        if (!task) return;

        const updatedTask: Task = {
            ...task,
            title,
            status: status as TaskStatus,
            description,
        };

        updateTaskAPI(updatedTask)
        .then(() => {
            navigate("/");  // navigate back to task list after update
        })
        .catch((error: any) => {
            console.error("Failed to update task", error);
        });
    };

    if (!task) return <div>Loading...</div>;

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>


            <label className="block mb-2 font-medium">Title</label>
            <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            />

            <label className="block mb-2 font-medium">Status</label>
            <select
               value={status}
               onChange={(e) => setTitle(e.target.value)}
               className="w-full p-2 border rounded mb-4">

               </select>

               <button
               onClick={handleUpdate}
               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
               >
                Update Task
               </button>
        </div>
    );
};

export default EditTask;