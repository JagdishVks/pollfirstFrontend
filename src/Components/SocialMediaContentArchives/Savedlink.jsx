import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Savedlink = () => {   //text will be prop
    const text="मायावती ने आकाश आनंद को फिर से पार्टी का स्टार प्रचारक बनाया है।- फाइल मायावती ने भतीजे आकाश आनंद को फिर नई जिम्मेदारी दी है। बसपा प्रमुख ने उनको उत्तराखंड उपचुनाव में पार्टी का स्टार प्रचारक बनाया है।"
    const truncateString = (text) => {
        if (text.length > 70) {
          return text.substring(0, 90) + '...';
        }
        return text;
      };
      

  return (
   <div className=" w-[75vw] mt-4 ml-2 shadow-md  shadow-black-200 justify-between rounded-xl border-2 border-black bg-[#ffffff] px-2 py-1  flex ">
       
       <h2  className='text-[20px] px-[12px] pt-2  font-istokweb'>{truncateString(text)}</h2>
   
       <a href="" className="font-istokweb text-[#ffffff] bg-[#03393D] px-[51px] py-[8px]">Create Summary</a>
   </div>
  )
}

export default Savedlink;
