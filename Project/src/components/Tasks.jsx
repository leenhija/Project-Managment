import AddTask from "./AddTask";
import { useContext } from "react";
import { TaskContext } from "../store/TaksContext";
export default function Tasks() {
  const {tasks , deleteTask}=useContext(TaskContext)
  const length = Object.keys(tasks).length;
  console.log(length);
  
  return (
    <section className="w-3/4 h-screen flex flex-col  ">
      <h4 className="w-3/4 font-bold text-2xl mt-3">Tasks</h4>
      <AddTask />
      {(length === 4 || (!tasks || !tasks.tasks || tasks.tasks.length === 0))&& (
        <p className="text-stone-800 my-4">
          This Project does not have any projects yet
        </p>
      )}
      {(length === 5)&& (
        <ul className="p-4 mt-8 rounded-md bg-stone-100 "
        style={{backgroundColor:(!tasks || !tasks.tasks || tasks.tasks.length === 0)?'#FAFAF9':'#F5F5F4'}}
        >
          {tasks.tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4" >
              <span>{task.text}</span>
              <button 
              onClick={() =>deleteTask(task.id)}
              className="text-stone-700 hover:text-red-500"
              
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
