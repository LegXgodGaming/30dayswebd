import React from 'react'
import { FaFileAlt, FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import {motion} from "framer-motion"
import { IoCloseCircle, IoScale } from "react-icons/io5";

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale :1.2}} className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-8 px-10 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}
       
      
      </p>  
      <div className='footer absolute bottom-0 w-full  left-0 '>
          <div className='flex items-center justify-between mb-5 py-3 px-8'>
             <h5>{data.filesize}</h5>
             <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            
             {data.close ? <IoCloseCircle/> : <FiDownload size=".7em" color='#fff'/>}
             </span>
          </div>
          {
            data.tag.isOpen  && (
                <div className={`tag w-full py-4 flex items-center justify-center ${data.tag.tagColor === "blue"? "bg-blue-600": "bg-green-600"}`}><h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3></div>

            ) }
          
         

         
       </div>
       

      
    </motion.div>
  )
}

export default Card
