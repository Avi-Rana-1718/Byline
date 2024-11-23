import { useState } from "react"
import { Link } from "react-router-dom"

export default function Dropdown({title, list}) {
    const [isOpen, setIsOpen] =useState(false)
    return (
        <>
        <button
        className="px-2 py-1 hover:bg-[#4b3f60] rounded"
        onClick={()=>{setIsOpen(!isOpen)}}
        >
            {title}
            <i className="fa-solid fa-caret-down ml-2"></i>
        </button>
        <div className={`absolute right-20 ${isOpen?"block":"hidden"}`}>
            <span className={`inline leading-none w-0 h-0 border-l-[15px] border-l-transparent border-b-[9px] border-b-[#EAE7EF] border-r-[0px] border-r-transparent`}
            ></span>
        <ul
        className={`absolute right-0 bg-[#EAE7EF] mt-[2px] p-2  text-[#282828] rounded  gap-y-1`}
        >
            {
                list.map(el=>{
                   return( 
                   <li 
                   key={el.title}
                    className="hover:bg-[#d6d4d4] hover:underline cursor-pointer rounded">
                        <Link className="px-2 py-1 block" to={el.href}>
                        {el.title}
                        </Link>
                    </li>
                   )
                })
            }
            </ul>
        </div>
        </>
    )
}