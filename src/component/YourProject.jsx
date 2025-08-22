import  Button  from "./Button.jsx";
export default function YourProject({onStartAddProject,myProjects,onClickingProject,selectedProjectId}){
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h1>
         <div>
            <Button onClick={onStartAddProject} >
      + Add Project
      </Button>
         </div>
      <ul>
        {myProjects.map( (myProject) =>{
            let cssClasses='w-full mt-[10px] px-2 py-1 text-stone-400 rounded-sm hover:bg-stone-700 hover:text-stone-200 cursor-pointer';
            if(myProject.id === selectedProjectId){
                cssClasses += ' bg-stone-700 text-stone-200';
            }
            else{
                cssClasses +=' text-stone-400';
            }
            return(
                <li key={myProject.id}>
            <button className={cssClasses}
             onClick={ () => onClickingProject(myProject.id)}>
                {myProject.title}</button>
        </li> )
           })}
              </ul>
        </aside>
            )
}