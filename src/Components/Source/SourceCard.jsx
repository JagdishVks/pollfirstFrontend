import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import EditModal from '../EditModal'
import DeleteModal from '../EditModal';

const SourceCard = ({sr}) => {

  const [expand, setexpand] = useState(false);
  const handleExpand=()=>{setexpand(!expand)};
  const truncateString=(str)=>{ return str.substr(0,window.innerWidth>=1024?9:9)+"..."}

  const [showEditModal, setShowEditModal] = useState(false);
  
  const [showDeleteModal, setshowDeleteModal] = useState(false);

  const splitStringIntoChunks = (str, chunkSize = 8) => {
    const chunks = [];
    for (let i = 0; i < str.length; i += chunkSize) {
      chunks.push(str.substr(i, chunkSize)+'\n'); 
    }
    return chunks;
  };
   
  const handleEditClick = () => {
    setShowEditModal(true);
  };
  
  const handleDeleteCLick = () => {
    setshowDeleteModal(true);
  };


  return (
   <div className="  shadow-md  shadow-black-200  rounded-xl border-2 border-black bg-[#ffffff] px-2 py-1  flex ">
      
      <h1 className='font-istokweb w-[18%]   2xl:text-[18px] text-[16px] text-[#03393D]'>{sr}</h1>
      <h1 className='font-istokweb w-[18%]   2xl:text-[18px] text-[16px] text-[#03393D]'>{expand==true?splitStringIntoChunks("#AkashAnand,Akash+Anand+BSPsfkjbkfeiwugfeiufifiufiuewu, ") :truncateString("Akash+Anand+BSP, आकाश+आनंद+बसपा")}</h1>
      <h1 className='font-istokweb w-[18%]   2xl:text-[18px] text-[16px] text-[#03393D]'>{expand==true?splitStringIntoChunks("#AkashAnand,Akash+Anand+BSPsfkjbkfeiwugfeiufifiufiuewu, ") :truncateString("Akash+Anand+BSP, आकाश+आनंद+बसपा")}</h1>
      <h1 className='font-istokweb w-[20%] 2xl:text-[18px] text-[16px] text-[#03393D]'>{expand==true?splitStringIntoChunks("#AkashAnand,Akash+Anand+BSPsfkjbkfeiwugfeiufifiufiuewu, ") :truncateString("Akash+Anand+BSP, आकाश+आनंद+बसपा")}</h1>
      <h1 className='font-istokweb w-[15%]  2xl:text-[18px] text-[16px] text-[#03393D]'>{expand==true?splitStringIntoChunks("#AkashAnand,Akash+Anand+BSPsfkjbkfeiwugfeiufifiufiuewu, ") :truncateString("Akash+Anand+BSP, आकाश+आनंद+बसपा")}</h1>
      {/* <h1 className='font-istokweb w-[15%]  2xl:text-[18px] text-[16px] text-[#03393D]'>{expand==true?splitStringIntoChunks("#AkashAnand,Akash+Anand+BSPsfkjbkfeiwugfeiufifiufiuewu, ") :truncateString("Akash+Anand+BSP, आकाश+आनंद+बसपा")}</h1> */}
      {/* <h1 className='font-istokweb w-[15%]  2xl:text-[18px] text-[16px] text-[#03393D]'>{expand==true?splitStringIntoChunks("#AkashAnand,Akash+Anand+BSPsfkjbkfeiwugfeiufifiufiuewu, ") :truncateString("Akash+Anand+BSP, आकाश+आनंद+बसपा")}</h1> */}
      <span className='flex  justify-evenly xl:mt-1 mt-[2px] '>&nbsp;<FaChevronCircleDown onClick={handleExpand}  className=' text-[18px] text-blue-600' /> &nbsp;
                                                                     <MdEdit onClick={handleEditClick} className='text-red text-[18px] text-blue-600' /> &nbsp; 
                                                                     <FaTrash onClick={handleDeleteCLick} className='text-[18px] text-red-600' />
      </span>
      {showEditModal && <EditModal show={true} onClose={() => setShowEditModal(false)} />} 
      {showDeleteModal && <DeleteModal show={true} onClose={() => setshowDeleteModal(false)} />}
   </div>
  )
}

export default SourceCard;
