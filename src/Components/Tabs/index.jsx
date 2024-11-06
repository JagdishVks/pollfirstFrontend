import React, { useState } from 'react';

const Tabs = ({firstTab,secondTab,thirdTab,firstComp,secondComp,thirdComp}) => {

  const [activeTab, setActiveTab] = useState("knowledge-center");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div className=" w-full p-0">
      <div className="flex justify-start border-b border-gray-300">
        
        <div
          onClick={() => handleTabClick("knowledge-center")}
          className={`cursor-pointer px-4 pb-[14px] ${
            activeTab === firstTab ? "border-b-4 border-[#0b9941] text-black" : "text-gray-500"
          }`}
        >
          Knowledge Center
        </div>
        
        <div
          onClick={() => handleTabClick("view-leaders")}
          className={`cursor-pointer px-4 pb-[14px] ${
            activeTab === secondTab ? "border-b-4 border-[#0b9941] text-black" : "text-gray-500"
          }`}
        >
          View Leaders
        </div>
        
        {thirdTab==null &&
        <div
          onClick={() => handleTabClick("add-leaders")}
          className={`cursor-pointer px-4 pb-[14px] ${
           thirdTab==null?false: activeTab ===thirdTab ? "border-b-4 border-[#6E01B1] text-[#6E01B1]" : "text-gray-500"
          }`}
        >
          Add Leaders
        </div>}
      </div>
    </div>
    
    <div className="mt-4 ">
    {activeTab === firstTab && firstComp}
    {activeTab === secondTab && secondComp}
    {activeTab === thirdTab && <div className="   mx-[200px]">{thirdComp}</div>}
  </div>
  </>
  );
};

export default Tabs;
