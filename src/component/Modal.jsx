import { createPortal } from "react-dom";
import { forwardRef ,useRef,useImperativeHandle} from "react";
import Button from "./Button.jsx";
const Modal=forwardRef(function Modal({children},ref){
    const dialog=useRef();
 useImperativeHandle(ref,()=>{
    return{
        open(){
            dialog.current.showModal();
        }
    }
 });
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90  rounded-md shadow-md px-5 m-auto">
           {children}
           <form action="dialog" className="text-right my-3">
            <Button>Close</Button>
           </form>
        </dialog>,
        document.getElementById("modal-root")
    );
})
export default Modal;