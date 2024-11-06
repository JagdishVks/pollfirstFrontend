// import React, { useRef, useState } from 'react'
import '../styles/carousel.css';
import Tabs from '../Components/Tabs';
import Leader from '../Pages/Leader';
import KnowledgeCenterComponent from '../Components/KnowledgeCenter/KnowledgeCenterComponent';



const KnowledgeCenter = () => {
 
  
  return (
    <>

    
    <div className=" ">
      <Tabs  firstTab="knowledge-center" firstComp={<KnowledgeCenterComponent />}
                            secondTab="view-leaders" secondComp={<Leader/>}
                            thirdTab="" thirdComp="null" />
     
      </div>
    </>
  );
};

export default KnowledgeCenter;
