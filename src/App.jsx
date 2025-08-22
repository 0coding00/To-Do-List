import { useState } from "react";
import NoProjectPage from "./component/NoProjectPage.jsx";
import YourProject from "./component/YourProject.jsx"; 
import CreatingProjectPage from "./component/CreatingProjectPage.jsx"
import ProjectInfo from "./component/ProjectInfo.jsx"
function App() {
const [projectSelected,setProjectSelected]=useState({
    projectStateId : undefined ,
     projects : [] ,
     tasks : []
}
);  
function handleState(){
  setProjectSelected((prevProject) => {
  return{
    ...prevProject ,
    projectStateId : null,
  }
})
}
function handleAddingProject(projectData){
  setProjectSelected((prevProject) =>{
    const projectId=Math.random();  
    const newProject={
      ...projectData,
      id : projectId,
    }
    return{
      ...prevProject,
      projectStateId:undefined,
      projects : [...prevProject.projects,newProject]
    }
  })
}

function handleCancleAdding(){
  setProjectSelected(prevProject =>{
    return {
      ...prevProject,
      projectStateId:undefined,
    }
  })
}
function handleClickedProject(id){
  setProjectSelected((prevProject) =>{
    return {
      ...prevProject,
      projectStateId : id,
    }
  })
}
function handleDeleteProject(){
    setProjectSelected((prevProject) =>{
      return {
        ...prevProject,
        projectStateId:undefined,
       projects :  prevProject.projects.filter((project) => project.id !== prevProject.projectStateId),
    }
  })
}
function handleAddTask(text){
  setProjectSelected((prevProject) => {
    const taskId = Math.random();
    const newTask = {
    text: text,
    prId: prevProject.projectStateId ,
    id: taskId 
    };
    return{
      ...prevProject,
      tasks: [newTask, ...prevProject.tasks]
  };
  });
}
function handleDeleteTask(id){
  setProjectSelected((prevProject)=>{
    return {
      ...prevProject,
      tasks : prevProject.tasks.filter((task) => task.id !== id)
    }
  })
}
const selectedProject=projectSelected.projects.find(
  (project) => project.id === projectSelected.projectStateId)
let content=(<ProjectInfo project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectSelected.tasks} selectedProjectId={projectSelected.projectStateId}/>);
if(projectSelected.projectStateId === null){
  content = <CreatingProjectPage onAdd={handleAddingProject} onCancle={handleCancleAdding}/>
}
else if(projectSelected.projectStateId===undefined){  
  content = <NoProjectPage  onStartAddProject={handleState}/>
}
  return (
<main className="h-screen my-8 flex gap-8">
<YourProject onStartAddProject={handleState} myProjects={projectSelected.projects}  onClickingProject={handleClickedProject} selectedProjectId={projectSelected.projectStateId}/>
{content}
</main>
  );
}
export default App;