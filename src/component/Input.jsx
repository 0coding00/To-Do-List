import { forwardRef } from "react";
const input = forwardRef(function input({label,type,...props} ,ref){
//    const classes='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 '
    return(
        <p className="flex flex-col gap-1 my-4">
           <label className="text-sm font-bold text-stone-500 uppercase" >
            {label}
            </label>
        <input className="w-full p-1 border-b-2 bg-stone-200 border-stone-200 rounded-sm text-stone-600 focus:outline-none focus:border-stone-600"
           {...props} ref={ref} type={type}/>
        </p>
    );
})
export default input;