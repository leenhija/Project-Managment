import { forwardRef , useRef ,useImperativeHandle } from "react"
import {createPortal} from 'react-dom'
const Modal=forwardRef(
    function Modal({children , buttonCaption}, ref){
        const dialog=useRef();
        useImperativeHandle(ref , ()=>{
            return{
                open(){
                    dialog.current.showModal();
                }
            }
        })
     return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md ">
        {children}
        <form method="dialog" className="mt-4 text-right">
         <button  className="text-white  bg-slate-800 px-4 py-2 rounded-md">{buttonCaption}</button>
        </form>
        </dialog> , document.getElementById("modal-root")
     );
    }
);
export default Modal;