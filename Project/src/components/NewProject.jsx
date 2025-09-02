import { useRef } from "react";
import Modal from "./Modal.jsx";
export default function NewProject({onAdd , onCancel}){
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();
    const modal=useRef();
    function handleEnteredData(event){
      event.preventDefault();
      const enteredTitle=title.current.value;
      const enteredDescription=description.current.value;
      const enteredDueDate=dueDate.current.value;
      if(enteredTitle.trim()==='' || enteredDescription.trim()==='' || enteredDueDate.trim()===''){
        modal.current.open();
        return
      }
      onAdd({
        title:enteredTitle,
        description:enteredDescription,
        dueDate:enteredDueDate,
      })
    }
    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl  font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops ... looks loke you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <section className="w-3/4 h-screen flex flex-col items-center mt-36">
          <form onSubmit={handleEnteredData} className="w-3/5 flex flex-col gap-3 ">
            <div className="flex flex-row justify-end gap-4 mr-4">
              <button
                className="text-md"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                className="text-white  bg-slate-800 px-4 py-2 rounded-md"
                type="submit"
                
              >
                Save
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <label className="uppercase font-semibold">title</label>
              <input
                type="text"
                ref={title}
                className="bg-slate-200 h-9 focus:border-b-2 focus:outline-none focus:border-solid focus:border-b-slate-800 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="uppercase font-semibold">description</label>
              <textarea
                  ref={description}
                className="bg-slate-200 h-20 focus:border-b-2 focus:outline-none focus:border-solid focus:border-b-slate-800 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="uppercase font-semibold">due date</label>
              <input
                ref={dueDate}
                type="date"
                className="bg-slate-200 h-9 focus:border-b-2 focus:outline-none focus:border-solid focus:border-b-slate-800 "
              />
            </div>
          </form>
        </section>
        </>
    );
}