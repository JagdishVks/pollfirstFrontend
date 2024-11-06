import React,{useState} from 'react';
import { FaTrash } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import TrackIssues from '../Components/Issues/TrackIssues';
import LocationCard from '../Components/Location/LocationCard';


const Location= () => {

  const [trackIssues, settrackIssues] = useState(false);

  const handletrackIssues=()=>{settrackIssues(!trackIssues)}

  return (
   <>
  <div className="w-5/6 m-4 rounded-[14px] mx-auto relative p-5 bg-[#C0DAE9] flex flex-col gap-3">
    

  <div className="flex shadow-md gap-[8%]  bg-white rounded-xl border-2 border-black bg-[#f4eded40] px-2 py-1">
    <h1 className="font-itim w-[14%]  text-nowrap whitespace-nowrap 2xl:text-[20px] text-[16px] text-[#03393D]">Master Issue</h1>
    <h1 className="font-itim w-[14%] text-ellipsis 2xl:text-[20px] text-[16px] text-[#03393D]">SubIssue Name</h1>
    <h1 className="font-itim w-[14%] text-ellipsis 2xl:text-[20px] text-[16px] text-[#03393D]">Hashtag</h1>
    <h1 className="font-itim w-[14%] text-ellipsis 2xl:text-[20px] text-[16px] text-[#03393D]">Keyword</h1>
    <h1 className="font-itim w-[14%] text-nowrap 2xl:text-[20px] text-[16px] text-[#03393D]">Action</h1>
  </div>
  <LocationCard/>
  
  <LocationCard/>
  
  <LocationCard/>
  
  <LocationCard/>
  
  <LocationCard/>
  <button className="text-center p-2 w-2/3 mx-auto bg-[#0B3A3D] text-[#ffffff]" onClick={handletrackIssues}>Add issues  </button>
  
    



</div>
{trackIssues && <TrackIssues show={handletrackIssues}/>}


    
 
  </>
  )
}

export default Location;
