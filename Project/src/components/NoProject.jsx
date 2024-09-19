import { useState, useRef } from "react";
export default function NoProject({StartNewProject}) {

 
  
  return (


        <section className="w-3/4 h-screen flex flex-col items-center mt-36">
          <img src="logo.png" className="w-20 h-20 mb-3" />
          <h2 className="font-semibold text-xl">No Project Selected </h2>
          <p className="text-slate-600 mt-3">
            Select a project or get started with a new one{" "}
          </p>
          <button
          onClick={StartNewProject}
            className="bg-slate-800 text-slate-200 p-3 px-2 rounded-md mt-5"
          >
            Create new project
          </button>
        </section>

  );
}
