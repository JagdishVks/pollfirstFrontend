import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import EditModal from "../EditModal";
import DeleteModal from "../DeleteModal";

const LeaderCard = () => {
  const [expand, setexpand] = useState(false);
  const handleExpand = () => {
    setexpand(!expand);
  };
  const truncateString = (str) => {
    return str.substr(0, window.innerWidth >= 1024 ? 9 : 9) + "...";
  };

  const [showEditModal, setShowEditModal] = useState(false);

  const [showDeleteModal, setshowDeleteModal] = useState(false);

  const splitStringIntoChunks = (str, chunkSize = 8) => {
    const chunks = [];
    for (let i = 0; i < str.length; i += chunkSize) {
      chunks.push(str.substr(i, chunkSize) + "\n");
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
    <div className=" w-full  shadow-md  shadow-black-200  rounded-xl border-2 border-gray bg-[#ffffff] px-2 py-1  flex ">
      
      <img src="./assets/RahulGandhi.jpg" className='rounded-[10px] w-[10%] m-2' alt="" />
          
      <h1 className="w-[10%]    2xl:text-[18px] text-[16px] text-[#03393D]">
        {expand == true
          ? splitStringIntoChunks(
              "Rahul Gandhi"
            )
          : truncateString("Rahul Gandhi")}
      </h1>
      <h1 className=" w-[15%]   2xl:text-[18px] text-[16px] text-[#03393D]">
        {expand == true
          ? splitStringIntoChunks(
              "#RahulGandhi,#gandhiji,#rahulgandhi "
            )
          : truncateString("#RahulGandhi,#gandhiji,#rahulgandhi")}
      </h1>
      <h1 className=" w-[15%] 2xl:text-[18px] text-[16px] text-[#03393D]">
        {expand == true
          ? splitStringIntoChunks(
              "#RahulGandhi,#RahulGandhi+congress "
            )
          : truncateString("#RahulGandhi,#RahulGandhi+congress")}
      </h1>
      <h1 className=" w-[15%] 2xl:text-[18px] text-[16px] text-[#03393D]">
        {expand == true
          ? splitStringIntoChunks(
              "RahulGandhi,RahulGandhi+congress "
            )
          : truncateString("RahulGandhi,RahulGandhi+congress")}
      </h1>
      <h1 className="w-[15%]  2xl:text-[18px] text-[16px] text-[#03393D]">
        {expand == true
          ? splitStringIntoChunks(
              "RahulGandhi,RahulGandhi+congress "
            )
          : truncateString("RahulGandhi,RahulGandhi+congress")}
      </h1>
      <h1 className="w-[10%]  2xl:text-[18px] text-[16px] text-[#03393D]">
        {expand == true
          ? splitStringIntoChunks(
              "#RahulGandhi,RahulGandhi+congress "
            )
          : truncateString("RahulGandhi,RahulGandhi+congress")}
      </h1>
      <span className="flex  justify-evenly xl:mt-1 mt-[2px] ">
        &nbsp;
        <FaChevronCircleDown
          onClick={handleExpand}
          className=" text-[18px] text-blue-600"
        />{" "}
        &nbsp;
        <MdEdit
          onClick={handleEditClick}
          className="text-red text-[18px] text-blue-600"
        />{" "}
        &nbsp;
        <FaTrash
          onClick={handleDeleteCLick}
          className="text-[18px] text-red-600"
        />
      </span>
      {showEditModal && (
        <EditModal show={true} onClose={() => setShowEditModal(false)} />
      )}

      {showDeleteModal && (
        <DeleteModal show={true} onClose={() => setshowDeleteModal(false)} />
      )}
    </div>
    
  );
};

export default LeaderCard;
