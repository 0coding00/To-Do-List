import Input from "./input";
import {useRef} from "react";
import Modal from "./Modal.jsx";
export default function CreatingProjectPage({onAdd,onCancle}){  
const title=useRef();
const desc=useRef();
const dueDate=useRef();
const modal=useRef();
function handleSave(){
const enteredTitle=title.current.value;
const enteredDesc=desc.current.value;
const enteredDueDate=dueDate.current.value;
if(enteredTitle.trim() ==="" || enteredDueDate.trim() ===""  || enteredDesc.trim() ==="" ){ 
    modal.current.open();
    return;
    }
onAdd({
    title:enteredTitle,
    desc:enteredDesc,
    dueDate:enteredDueDate
})
};
 return (
    < >
    <Modal ref={modal}>
    <h1 className="my-8 text-center font-bold text-gray-500 text-[25px]">Error</h1> 
    <p className="text-center text-gray-400 text-[16px] font-semibold">Oops , it looks like you miss to fill a field</p>   
    </Modal>
        <div  className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4 " >
        <li>
        <button className= "rounded-[8px] text-stone-800 cursor-pointer hover:text-stone-950" onClick={onCancle}>Cancle</button>
        </li>
        <li>
        <button className="px-6 py-2 bg-stone-800  rounded-[8px]  cursor-pointer hover:bg-stone-950 text-white"   onClick={handleSave}>Save</button>
        </li>
       </menu>
       <div >
        <Input  label={"TITLE"} type={"text"} ref={title}/>
        <Input  label={"DESCRIPTION"} type={"text"} ref={desc} />
        <Input  label= {"DATE"} type={"date"}  ref={dueDate}/>
       </div>
        </div>
        </>
    )
}