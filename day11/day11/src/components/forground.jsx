import React from 'react'
import Card from './Card'
import { useRef } from 'react';

function forground() {
    
     const ref = useRef(null);
     
     const data = [
      {desc:"This is description of this card and give all details",
       filesize: ".9mb", 
       close: true, 
       tag:{isOpen:true, tagTitle:"DownloadNOW", tagColor:"green" },},
       {desc:"This is description of this card and give all details",
       filesize: ".9mb", 
       close: true, 
       tag:{isOpen:true, tagTitle:"DownloadNOW", tagColor:"blue" },},
       {desc:"This is description of this card and give all details",
       filesize: ".9mb", 
       close: true, 
       tag:{isOpen:true, tagTitle:"Upload", tagColor:"green" },}
  ];
  

  

  return (
    <div>
       <div ref={ref} className=' fixed z-[3] top-0 left-0  w-full h-full flex gap-10 flex-wrap p-5' >
       {data.map((item, index) =>(
          <Card data={item} reference={ref}/>
       ))}
      
        </div>
      
    </div>
  )
}

export default forground
