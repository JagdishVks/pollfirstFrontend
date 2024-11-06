import React, { useState } from 'react';

const SocialMediaTabs = () => {
  const [activeTab, setActiveTab] = useState("news");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full flex justify-start border-b border-gray-300 pb-[12px]">
      <div
        onClick={() => handleTabClick("news")}
        className={`cursor-pointer px-4 pb-[12px] ${
          activeTab === "news" ? "border-b-4 border-[#6E01B1] text-[#6E01B1]" : "text-gray-500"
        }`}
      >
        News
      </div>

      <div
        onClick={() => handleTabClick("twitter")}
        className={`cursor-pointer px-4 pb-[12px] ${
          activeTab === "twitter" ? "border-b-4 border-[#6E01B1] text-[#6E01B1]" : "text-gray-500"
        }`}
      >
        Twitter
      </div>

      <div
        onClick={() => handleTabClick("instagram")}
        className={`cursor-pointer px-4 pb-[12px] ${
          activeTab === "instagram" ? "border-b-4 border-[#6E01B1] text-[#6E01B1]" : "text-gray-500"
        }`}
      >
        Instagram
      </div>

      <div
        onClick={() => handleTabClick("facebook")}
        className={`cursor-pointer px-4 pb-[12px] ${
          activeTab === "facebook" ? "border-b-4 border-[#6E01B1] text-[#6E01B1]" : "text-gray-500"
        }`}
      >
        Facebook
      </div>

      <div
        onClick={() => handleTabClick("saved-links")}
        className={`cursor-pointer px-4 pb-[12px] ${
          activeTab === "saved-links" ? "border-b-4 border-[#6E01B1] text-[#6E01B1]" : "text-gray-500"
        }`}
      >
        Saved Links
      </div>
    </div>
  );
};

export default SocialMediaTabs;
