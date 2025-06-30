import axios from './axiosConfig';
import type { Task } from "../types/Task";



export const updateTask = async (task: Task) => {
    const response = await axios.put(`/tasks/${task.id}`, task);
    return response.data;
};

export const getAllTask = async () => {
    try {
        const response = await axios.get('/tasks');
        return response.data;

    } 
    catch (error){
        console.error("Error fetching tasks:", error );
        throw error;
    }
};

export const getTaskById = (id: number) => {
    return axios.get(`/tasks/${id}`)
    .then((res) => res.data)
    .catch((err) => {
        console.error("Error fetching task by ID:",err);
        throw err;
    });
};
export const deleteTask = async (id: number) => {
    return await axios.delete(`/tasks/${id}`);
};
