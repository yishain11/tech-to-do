import { useDispatch, useSelector } from 'react-redux';
import { completeTask } from '../redux/features/task.slice';
import sanitizeHtml from 'sanitize-html';

export default function Read() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => {
        return state.tasks;
    });
    return (<div>
        <h1>read page</h1>
        <h4>tasks:</h4>
        <div>{tasks.map(task => {
            console.log('task', task)
            return <div key={task.name} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ textDecoration: !task.isComplete ? 'none' : 'line-through' }}>name: {task.name}</div>
                <div>details: {task.details}</div>
                <span role='img' dangerouslySetInnerHTML={{ __html: sanitizeHtml(task.emoji) }}></span>
                <div style={{ display: 'flex', margin: 'auto' }}>
                    <label htmlFor="isComplete">Is Done?</label>
                    <input type="checkbox" name="isComplete" id="isComplete" checked={task.isComplete} onChange={() => {
                        dispatch(completeTask({ name: task.name }));
                    }} />
                </div>
                <hr />
            </div>
        })}</div>
    </div>);
}
