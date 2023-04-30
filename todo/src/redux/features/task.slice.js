import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        createTask(state, action) {
            state.push(action.payload);
        },
        // updateTask(state, action) { },
        // deleteTask(state, action) { },
        // readTask(state, action) { },
    },
});
export const { createTask } = tasksSlice.actions;
export default tasksSlice.reducer;