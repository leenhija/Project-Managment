import ProjectsList from "./components/ProjectsList";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import { useState } from "react";
import Project from "./components/Project";
import { TaskContext } from "./store/TaksContext";
function App() {
  const [projectsStates, setProjectsStates] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handlStartAddProject() {
    setProjectsStates((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectsStates((prevSate) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevSate,
        selectedProjectId: undefined,
        projects: [...prevSate.projects, newProject],
      };
    });
    console.log(projectsStates);
  }
  function handleCancelAddProject() {
    setProjectsStates((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectedProject(id) {
    setProjectsStates((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }
  function handleDeleteProject() {
    setProjectsStates((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  }

  function handleAddTask(text) {
    setProjectsStates((prevState) => {
      console.log(projectsStates);
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      const updatedProjects = prevState.projects.map((project) =>
        project.id === prevState.selectedProjectId
          ? {
              ...project, 
              tasks: [...(project.tasks || []), newTask], 
            }
          : project
      );
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }
  function handleDeleteTask(id) {
    console.log(projectsStates.projects.tasks)
    setProjectsStates((prev) => {
      const updateProject=prev.projects.map((project)=>
       
      project.id===prev.selectedProjectId?{
        ...project,
       tasks:project.tasks.filter(task => task.id !== id)
      }:project
      )
      return {
        ...prev,
        projects: updateProject,
      };
    });
    console.log(projectsStates)
  }
  const selectedProject = projectsStates.projects.find(
    (project) => project.id === projectsStates.selectedProjectId
  );
  const ctxData={
   tasks:selectedProject,
   addTask:handleAddTask,
   deleteTask:handleDeleteTask
  }
  let content = (
    <TaskContext.Provider value={ctxData}>
 <Project
      project={selectedProject}
      onDelete={handleDeleteProject}
    />
    </TaskContext.Provider>
   
  );
  if (projectsStates.selectedProjectId === undefined) {
    content = <NoProject StartNewProject={handlStartAddProject} />;
  } else if (projectsStates.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  }
  return (
    <>
      <main className="flex flex-row h-screen ">
        <ProjectsList
          StartNewProject={handlStartAddProject}
          projects={projectsStates.projects}
          onSelectProject={handleSelectedProject}
          selectedProjectId={projectsStates.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
