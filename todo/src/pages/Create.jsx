export default function Create() {
    return <div>
        <h1>create task</h1>
        <form action="#">
            <label htmlFor="taskName">Name</label>
            <input type="text" name='taskName' />
            <label htmlFor="taskDetails">Details</label>
            <input type="text" name='taskDetails' />
            <button>create</button>
        </form>
    </div>;
}
