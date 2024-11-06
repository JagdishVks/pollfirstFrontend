import React, { useState } from "react";
// import MoreInfobtn from '../Button/MoreInfobtn'
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const TrackerCard = ({ data }) => {
  const [newsArticles, setNewsArticles] = useState([]);
  const leaderName = data.leaderName;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // If the leader's name exists, use it to fetch top news
        if (leaderName) {
          const newsResponse = await axios.get(
            `http://localhost:5196/api/KnowledgeCenter/NewsArticlesByLeaderName?leaderName=${encodeURIComponent(
              leaderName
            )}`
          );

          //console.log("News articles:", newsResponse.data); // Log the news articles
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
      <div className="w-full border-3 shadow-md shadow-slate-300 bg-[#faf9f9]  flex flex-col gap-y-[14px] rounded-[12px] ">
        <img
          src="./assets/RahulGandhi.jpg"
          className="w-auto mx-[20px] my-[18px] rounded-[10px] "
          alt=""
        />
        <h2 className="text-[24px] text-center font-bold text-[#0B3A3D]">
          {data.leaderName}
        </h2>
        <h2 className="text-[24px font-istokweb] font-semibold mx-[30px]">
          {newsArticles.headline}
        </h2>

        <Link
          to={`/SocialMediaPage?leaderName=${encodeURIComponent(
            data.leaderName
          )}`}
          className="w-auto bg-[#0d353e] flex rounded-[14px] justify-center ml-5 mr-5 mb-5 hover:bg-[#154f5c]"
        >
          <span className="font-istokweb text-[20px] my-[5.5px] text-white">
            Know More
          </span>
        </Link>
      </div>
    </>
  );
};

export default TrackerCard;
