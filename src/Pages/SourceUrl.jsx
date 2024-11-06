import React,{useState} from 'react';
import { FaTrash } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import TrackLeaders from './TrackLeaders';
import SourceCard from '../Components/Source/SourceCard';
import TrackUrl from '../Components/SocialMediaContent/TrackUrl';

const SourceUrl = () => {

  const [addurlform, setaddurlform] = useState(false);
  const handleaddUrlform=()=>{setaddurlform(!setaddurlform);};
  return (
   <>
  <div className="xl:w-[80%] w-full mx-24 p-5 m-5 rounded-[14px] bg-[#C0DAE9] flex flex-col gap-3">
    

  <div className="flex shadow-md gap-[8%]  bg-white rounded-xl border-2 border-black bg-[#f4eded40] px-2 py-1">
    <h1 className="font-itim w-[14%]  text-nowrap whitespace-nowrap 2xl:text-[20px] text-[16px] text-[#03393D]">SrNo</h1>
    <h1 className="font-itim w-[14%] text-ellipsis 2xl:text-[20px] text-[16px] text-[#03393D]">SourceUrl</h1>
    <h1 className="font-itim w-[14%] text-ellipsis 2xl:text-[20px] text-[16px] text-[#03393D]">HeadLine</h1>
    <h1 className="font-itim w-[14%] text-ellipsis 2xl:text-[20px] text-[16px] text-[#03393D]">Description</h1>
    {/* <h1 className="font-itim w-[14%] text-nowrap 2xl:text-[20px] text-[16px] text-[#03393D]">Body</h1> */}
    {/* <h1 className="font-itim w-[14%] text-nowrap 2xl:text-[20px] text-[16px] text-[#03393D]">Author</h1> */}
    <h1 className="font-itim w-[14%] text-nowrap 2xl:text-[20px] text-[16px] text-[#03393D]">Date&Time</h1>
    <h1 className="font-itim w-[14%] text-nowrap 2xl:text-[20px] text-[16px] text-[#03393D]">Action</h1>
  </div>
  <SourceCard sr="1"/>
  
  <SourceCard sr="2"/>
  
  <SourceCard sr="3"/>
  
  <SourceCard sr="4"/>
  <button className="text-center p-2 w-2/3 mx-auto bg-[#0B3A3D] text-[#ffffff]" onClick={setaddurlform}>Add url</button>
  
    



</div>
{ addurlform && <TrackUrl show={handleaddUrlform} />}


    
 
  </>
  )
}

export default SourceUrl;
