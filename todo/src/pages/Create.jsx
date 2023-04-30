import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/features/task.slice';
export default function Create() {
    const [taskName, setTaskName] = useState('');
    const [taskDetails, setTaskDetails] = useState('');
    const dispatch = useDispatch();
    return <div>
        <h1>create task</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(createTask({ name: taskName, details: taskDetails, isComplete: false }));
        }}>
            <label htmlFor="taskName">Name</label>
            <input value={taskName} type="text" name='taskName' onInput={(e) => {
                setTaskName(e.target.value);
            }} />
            <label htmlFor="taskDetails">Details</label>
            <input value={taskDetails} type="text" name='taskDetails' onInput={(e) => {
                setTaskDetails(e.target.value);
            }} />
            <button>create</button>
        </form>
    </div>;
}
