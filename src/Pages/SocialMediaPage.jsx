import React, { useState } from 'react';
import SocialMediaContent from '../Components/SocialMediaContent';
import SocialMediaContentTwitter from '../Components/SocialMediaContentTwitter';
import SocialMediaContentInstagram from '../Components/SocialMediaContentInstagram';
import SocialMediaContentFacebook from '../Components/SocialMediaContentFacebook';
import SocialMediaContentArchives from '../Components/SocialMediaContentArchives';


import Savedlink from '../Components/SocialMediaContent/Savedlink';
import { useLocation } from 'react-router-dom';

const SocialMediaPage = () => {
  const [activeTab, setActiveTab] = useState("news");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Get the current location object
  const location = useLocation();

  // Extract the query parameters
  const queryParams = new URLSearchParams(location.search);
  const leaderName = queryParams.get('leaderName');

  return (
    <div className='mb-10'>
      <div className="w-full flex justify-start border-b border-gray-300 pb-[12px]">
        <div
          onClick={() => handleTabClick("news")}
          className={`cursor-pointer px-4 pb-[12px] ${activeTab === "news" ? "border-b-4 border-[#0b9941] text-[#000000]" : "text-gray-500"}`}
        >
          News   
        </div>

        <div
          onClick={() => handleTabClick("twitter")}
          className={`cursor-pointer px-4 pb-[12px] ${activeTab === "twitter" ? "border-b-4 border-[#0b9941] text-[#000000]" : "text-gray-500"}`}
        >
          Twitter
        </div>

        <div
          onClick={() => handleTabClick("instagram")}
          className={`cursor-pointer px-4 pb-[12px] ${activeTab === "instagram" ? "border-b-4 border-[#0b9941] text-[#000000]" : "text-gray-500"}`}
        >
          Instagram
        </div>

        <div
          onClick={() => handleTabClick("facebook")}
          className={`cursor-pointer px-4 pb-[12px] ${activeTab === "facebook" ? "border-b-4 border-[#0b9941] text-[#000000]" : "text-gray-500"}`}
        >
          Facebook
        </div>

        <div
          onClick={() => handleTabClick("saved-links")}
          className={`cursor-pointer px-4 pb-[12px] ${activeTab === "saved-links" ? "border-b-4 border-[#0b9941] text-[#000000]" : "text-gray-500"}`}
        >
          Saved Links
        </div>
      </div>

      {activeTab === "news" && <SocialMediaContent leaderName={leaderName}/>}
      {activeTab === "twitter" && <SocialMediaContentTwitter leaderName={leaderName}/>}
      {activeTab === "instagram" && <SocialMediaContentInstagram leaderName={leaderName}/>}
      {activeTab === "facebook" && <SocialMediaContentFacebook leaderName={leaderName} />}
      {activeTab === "saved-links" && <SocialMediaContentArchives leaderName={leaderName}/>}
    </div>
  );
};

export default SocialMediaPage;
