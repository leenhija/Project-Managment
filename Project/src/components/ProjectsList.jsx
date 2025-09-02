
import { useRef, useState } from "react";
export default function ProjectsList({
  StartNewProject,
  projects,
  onSelectProject,
  selectedProjectId
}) {
  return (
    <section className="flex flex-col justify-start items-start w-1/4 h-screen bg-slate-950  rounded-br-xl rounded-tr-xl">
      <h2 className="text-stone-500 uppercase pl-8 pt-16 text-2xl font-semibold">
        Your Projects
      </h2>
      <button
        className="text-white p-2 ml-8 mt-6 px-2 rounded-md bg-rose-400"
        onClick={StartNewProject}
      >
        + Add Project
      </button>
      <ul className=" w-3/4 ml-8">
        {projects.map((project) => 
        {
            let CSSclass="w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
           if(project.id=== selectedProjectId){
            CSSclass+=' bg-stone-800 text-stone-200'
           }
           else{
             CSSclass+=' text-stone-400 ';
           }
         return(<li key={project.id}>
            <button 
            onClick={()=>onSelectProject(project.id)}
            className={CSSclass}>
              {project.title}
            </button>
          </li>);
})}
      </ul>
    </section>
  );
}
