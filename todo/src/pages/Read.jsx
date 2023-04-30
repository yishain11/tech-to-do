import { useSelector } from 'react-redux';

export default function Read() {
    const tasks = useSelector((state) => {
        console.log(state);
        return state;
    });
    return <div>
        <h1>read page</h1>
        <h4>tasks:</h4>
        <div>{tasks.map(task => {
            return <div key={task.name}>
                name: {task.name}
                <br />
                details: {task.details}
                <hr />
            </div>;
        })}</div>
    </div>;
}
