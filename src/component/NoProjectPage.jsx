import  Button  from "./Button.jsx";
export default function NoProjectPage({onStartAddProject}){
  return(
        <div className="flex flex-col items-center w-[75%]">
        <img className="w-[100px] h-[100px] center  mt-30" src=" logo.png" />
          <h1 className="my-8 text-center font-bold text-gray-500 text-[25px]">No Project Selected</h1>
          <p className="text-center text-gray-400 text-[16px] font-semibold">Select a project or get started with a new one</p>
          <Button onClick={onStartAddProject} >Create new project</Button>
        </div>
    );
}