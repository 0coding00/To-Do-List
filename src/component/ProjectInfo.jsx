import Tasks from "./Tasks.jsx";
export default function ProjectInfo({project,onDelete,onAddTask,onDeleteTask,tasks ,selectedProjectId}){
    const dDate=new Date(project.dueDate).toLocaleDateString('en-US',
        {
            year : 'numeric',
            month : 'short',
            day : 'numeric'
        }
    );
    return (<div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex justify-between items-center">
    <h1 className="text-3xl font-bold text-stone-500 mb-2">{project.title}</h1>
    <button className="text-stone-600 hover:text-stone-950 cursor-pointer" onClick={onDelete}>Delete</button>
            </div>
    <p className="mb-4 text-stone-400">{dDate}</p>
    <p className="mb-4 whitespace-pre-wrap">{project.desc}</p>
        </header>
    <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} selectedProjectId={selectedProjectId}/>
    </div>)
}
