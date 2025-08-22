import { useState } from "react"
export default function NewTask({onAdd}){
const [enteredTask,setEnteredTask]=useState('');
function handleChange(event){
    setEnteredTask(event.target.value);
}
function handleClickButton(){
    if(enteredTask.trim()==='')
        return;
    onAdd(enteredTask);
    setEnteredTask('');
}
    return (<div className="mt-5">
    <p className="my-2">New Task</p>
    <div >
    <input type="text" className="bg-stone-300 rounded-md" onChange={handleChange} value={enteredTask} />
    <button className="bg-stone-500 rounded-md text-white mx-4 px-2 cursor-pointer" onClick={handleClickButton}>+Add Task </button>
    </div>
    </div>
    )
}