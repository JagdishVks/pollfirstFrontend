import React, { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const SocialMediaContentArchives = ({leaderName}) => {

  // console.log("LLLLLLLLLLLLLLLL"+leaderName);
  const [newsArticles, setNewsArticles] = useState([]);
  const leaderName1 = leaderName;
  const userId = "3";
  useEffect(() => {
    const fetchData = async () => {
      try {
        // If the leader's name exists, use it to fetch top news
        if (leaderName1) {
          const newsResponse = await axios.get(
            `http://localhost:5196/api/KnowledgeCenter/NewsPlatformArchivesByLeaderNameAndUserId?leaderName=${encodeURIComponent(leaderName1)}&userId=${encodeURIComponent(userId)}`
          );

          //console.log("News articles ALL through leader name:", newsResponse.data); // Log the news articles
          setNewsArticles(newsResponse.data); // Store the news articles in state
        }
      } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
      }
    };

    // Call the async function
    fetchData();

    // Optional cleanup function (if needed)
    return () => {
      // Cleanup if necessary (e.g., canceling requests)
    };
  }, []); // The empty array ensures this effect runs only once when the component mounts
  return (
    <>
    {/* START-social media content */}
    {newsArticles.length > 0 ? (
        newsArticles.map((article, index) => (
      <div key={index} className="w-auto rounded-[14px] ml-5 mr-5 mt-5 font-istokweb p-2 bg-[#faf9f9] flex  items-center  shadow-slate-300 border-3 shadow-md">
        <div className="flex flex-row items-center">
          <img src="./assets/RahulGandhi.jpg" className="w-[200px] h-[200px] p-2 rounded-[10px]" />
          <div className="flex flex-col">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 text-[18px] font-bold text-[#2e05e2] font-istokweb"
            >
              {article.headline || "No headline available"}
            </a>
            <h2 className="text-[18px] px-[12px] font-istokweb mt-2">
              {article.description || "No description available"}
            </h2>
            
            
          </div>
        </div>

        <div className="flex flex-col">
          <a
            href="/CreateSummary"
            className="font-istokweb text-[#ffffff] bg-[#03393D] p-3 m-1 text-center w-40 rounded-[14px] hover:bg-[#154f5c] hover:text-[#FFFFFF]"
          >
            Create Summary
          </a>
          {/* <a
            href=""
            className="font-istokweb text-[#ffffff] bg-[#03393D] p-3 m-1 text-center w-40 rounded-[14px] hover:bg-[#154f5c] hover:text-[#FFFFFF]"
          >
            Saved Links
          </a>
          <a
            href=""
            className="font-istokweb text-[#ffffff] bg-[#03393D] p-3 m-1 text-center w-40 rounded-[14px] hover:bg-[#154f5c] hover:text-[#FFFFFF]"
          >
            Not Relevant
          </a> */}
        </div>
      </div>
))
) : (
  <p className="ml-5 mr-5 mt-5">No news articles found for this leader.</p>
)}
       
    
    {/* END-Social Media Content */}
    
    
    </>
  );
};

export default SocialMediaContentArchives;
