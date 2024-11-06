import React from 'react';
import { FaHome } from 'react-icons/fa';  
import { NavLink, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <div className="w-full flex  items-center text-lg font-medium text-black p-2">
      <NavLink to="/" className="flex items-center text-[#b7eaed]">
        <FaHome className="mr-2 text-xl text-black" />
        <span className="text-black">Home </span> 
      </NavLink>
      
      {paths.length > 0 && (
        paths.map((path, index) => (
          <React.Fragment key={index}>
            <span className="mx-2 text-white">{">"}</span> 
            <NavLink
              to={`/${paths.slice(0, index + 1).join("/")}`}
              className="capitalize text-[#FFFFFF] hover:text-[#b7eaed]"
            >
              {path.replace("-", " ")} 
            </NavLink>
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Breadcrumb;
