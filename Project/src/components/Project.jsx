import { useState ,useRef } from "react";
import Tasks from "./Tasks";
export default function Project({ project , onDelete  }) {
 const formatyedDate= new Date(project.dueDate).toLocaleDateString('en-US',{
    year:'numeric',
    month:'short',
    day:'numeric'
 })
  return (
    <section className="w-3/4 h-screen flex flex-col items-center mt-36">

          <div className="flex flex-row justify-between w-3/4">
            <h2   className="text-4xl font-bold">{project.title}</h2>
            <button 
            onClick={onDelete}
            className="text-white bg-rose-500 p-2 rounded-md">
              Delete
            </button>
          </div>
          <p className="w-3/4 text-md text-slate-400 mt-3">{formatyedDate}</p>
          <p className="w-3/4 text-2xl mt-4 whitespace-pre-wrap">{project.description}</p>
          <br />
          <hr className="w-3/4 border-solid border-black border-x" />
          <Tasks />
             </section>
  );
}
