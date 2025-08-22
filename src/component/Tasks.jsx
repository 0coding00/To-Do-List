import NewTask from "./NewTask.jsx";
export default function Tasks({onAdd,onDelete,tasks,selectedProjectId}){
    return ( <section>
        <h2 className="font-bold text-xl mb-2">TASKS</h2>
        <NewTask onAdd={onAdd} />
        {tasks.length === 0 && ( <p className="text-stone-800 my-4">No tasks have been added yet !</p>)}
        {tasks.length > 0 && (
            <ul className="p-4 my-3 bg-stone-100 rounded-md">
        {tasks.map((task) => (
             task.prId === selectedProjectId && (
                 <li key={task.id} className="flex my-4 py-3 justify-between">
                    <span>{task.text}</span>
                    <button className="text-stone-500 hover:text-red-500 cursor-pointer"
                     onClick={() => {onDelete(task.id)}}>Clear</button>
                </li> ) 
                ))}
        </ul>)}
    </section>)
}