import { configureStore } from '@reduxjs/toolkit';

import taskReducer from '../features/task.slice';

const store = configureStore({ reducer: taskReducer });
export default store;