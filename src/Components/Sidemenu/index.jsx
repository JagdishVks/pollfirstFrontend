import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdPlayArrow } from "react-icons/md";
import Loader from '../Loader';

const SideMenu = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Track route changes

  useEffect(() => {
    // Trigger loader every time the route changes
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Loader runs for 1.2 seconds on every route change

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [location]); // Dependency array includes 'location' to trigger on route change

  
  const menuItems = [
    { name: 'Knowledge Center', path: '/' },
    { name: 'Manage Issues', path: '/Issues' },
    { name: 'Manage Locations', path: '/location' },
    { name: 'Manage Source URL', path: '/source' },
    { name: 'Poll Analytic', path: '/poll-analytic' },
    { name: 'Tracker', path: '/tracker' },
    { name: 'WorkForce Mgmt', path: '/workforce-mgmt' },
    { name: 'Social Manager', path: '/social-manager' },
    { name: 'Locality Mapping', path: '/locality-mapping' },
    { name: 'Voter Mapping', path: '/voter-mapping' },
    { name: 'Your Reports', path: '/your-reports' },
    { name: 'AdFirst', path: '/adfirst' },
    { name: 'Outreach Manager', path: '/outreach-manager' },
    { name: 'Get News', path: '/get-news' },
  ];

// Function to check if the Knowledge Center should be highlighted
const isKnowledgeCenterActive = location.pathname === '/' || location.pathname === '/SocialMediaPage';
  return (
    <div className="w-[20%] h-full p-5 top-0 left-0 bg-[#FFFFFF] shadow-lg z-2">
      <a href="/"><img src="./assets/pollfirst_logo.png" className='w-auto bg-white mb-5 rounded-2xl' alt="" /></a>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.path} className='bg-white text-black rounded-lg'>
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `flex justify-between items-center text-nowrap font-isktoqweb text-[18px] py-2 px-3 rounded-lg font-istokweb hover:bg-[#154f5c] hover:text-[#FFFFFF] transition-all duration-200 ${
                  (item.name === 'Knowledge Center' && isKnowledgeCenterActive) || isActive
                    ? 'bg-[#0d353e] text-[#FFFFFF] border border-[#0c343d] rounded-lg'
                    : ''
                }`}
            > {item.name}
              <MdPlayArrow className="ml-2" />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
