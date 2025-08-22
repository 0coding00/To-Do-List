export default function Button({children,...props}){
    return(     
          <button className="text-white bg-neutral-700 p-[12px] rounded-[12px] text-[18px] mr-auto ml-auto cursor-pointer mt-[10px]" {...props} >
            {children}
          </button>);
}