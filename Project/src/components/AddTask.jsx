import { useState , useContext } from "react"
import { TaskContext } from "../store/TaksContext";
export default function AddTask(){
  const {addTask}=useContext(TaskContext);
    const [enteredTask , setEnteredTask]= useState('');
    function handleAddTaks(event){
        setEnteredTask(event.target.value)
    }
    function handleTasks(){
        if(enteredTask.trim()===''){
            return
        }
        addTask(enteredTask);
        setEnteredTask('');
    }
    return(
        <div className="flex flex-row gap-5 mt-4 w-3/4 mb-5 ">
        <input
          type="text"
          onChange={handleAddTaks}
        value={enteredTask}
          className="bg-slate-200 rounded-sm outline-cyan-600"
        />
        <button 
         onClick={handleTasks}
        className="outline-none hover:bg-slate-300 p-2 rounded-sm">
          Add Task
        </button>
      </div>
    )
}