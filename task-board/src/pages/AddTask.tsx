import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('To Do');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newTask = {title, status};

        try {
            await axios.post('http://localhost:8080/tasks', newTask);
            alert('Task created Successfully!');
            navigate('/tasks');

        }
        catch (error) {
            console.error('Error creating task:',error);
            alert('Failed to create task.');

        }
    };

    return(
        <div className="min-h-screen bg-white-900 bg-white flex-justify-center items-center px-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Title</label>
                    <input 
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full border-gray-300 p-2 rounded"
                      placeholder="Enter task title"
                      required
                    />
                </div>
                <div>
                    <label className="block font-medium">Status</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full border border-gray-300 p-2 rounded"
                      >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                      </select>
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Create Task
                  </button>
            </form>
        </div>
    );
};

export default AddTask;
