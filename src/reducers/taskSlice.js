import { createSlice } from "@reduxjs/toolkit";
import taskData from "../data/tasks.json";
const initialState = [];

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTasks: (action) => {
            return action.payload;
        },
        addTask: (state, action) => {
            return [...state, action.payload];
        },
        deleteTasks: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },
        updateTasks: (state, action) => {
            return state.map(
                task => task.id === action.payload.id
                    ? { ...task, ...action.payload }
                    : task
            );
        }
    }
});

export const { addTasks, addTask, deleteTasks, updateTasks } = taskSlice.actions;
export default taskSlice.reducer;