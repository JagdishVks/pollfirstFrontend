import React, { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const SocialMediaContent = ({ leaderName }) => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  // console.log("LLLLLLLLLLLLLLLL"+leaderName);
  const [newsArticles, setNewsArticles] = useState([]);
  const leaderName1 = leaderName;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // If the leader's name exists, use it to fetch top news
        if (leaderName1) {
          const newsResponse = await axios.get(
            `http://localhost:5196/api/KnowledgeCenter/AllNewsArticlesByLeaderName?leaderName=${encodeURIComponent(
              leaderName1
            )}`
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

  // ************************Start-Save link code******************
  // Function to save a link by sending a POST request to the API
  const saveLink = async (newsArticleId, userId) => {
    try {
      const apiUrl =
        "http://localhost:5196/api/KnowledgeCenter/SaveLinkNewsArticle";

      const response = await axios.post(
        apiUrl,
        {
          newsArticleId: newsArticleId,
          userId: userId, // Sending userId manually
          withCredentials: true, // This will send the cookies with the request
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Link saved successfully:", response.data);
        alert("Link saved successfully!");
      } else {
        console.error("Error saving link:", response.data);
        alert(`Error: ${response.status} - ${response.data.message}`);
      }
    } catch (error) {
      if (error.response) {
        console.error("Response error:", error.response.data);
        alert(
          `Error occurred: ${error.response.status} - ${
            error.response.data.title || error.response.data
          }`
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response received from the server.");
      } else {
        console.error("Error setting up request:", error.message);
        alert(`Error setting up request: ${error.message}`);
      }
    }
  };
  // ************************End-Save link code******************

  //*************************Start-Delete link code**************** */
  const deleteLink = async (newsArticleId) => {
    try {
      const currentUrl = window.location.href; // Get current page URL
      const apiUrl = `http://localhost:5196/api/KnowledgeCenter/NewsArticlesDelete/${newsArticleId}`;

      // Confirmation prompt
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this article?"
      );
      if (!isConfirmed) {
        return; // Exit if the user cancels the delete action
      }

      const response = await axios.delete(apiUrl, {
        withCredentials: true, // Send cookies with the request
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 204) {
        console.log("Link deleted successfully");
        alert("Link deleted successfully!");

        // Redirect back to the front page or any other route after successful deletion
        // navigate('/'); // Change '/' to the route you want to redirect to
        window.location.href = currentUrl; // Redirect back to the same page
      } else {
        console.error("Error deleting link:", response.data);
        alert(`Error: ${response.status} - ${response.data.message}`);
      }
    } catch (error) {
      if (error.response) {
        console.error("Response error:", error.response.data);
        alert(
          `Error occurred: ${error.response.status} - ${
            error.response.data.title || error.response.data
          }`
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response received from the server.");
      } else {
        console.error("Error setting up request:", error.message);
        alert(`Error setting up request: ${error.message}`);
      }
    }
  };

  //*************************End-Delete link code**************** */

  return (
    <>
      {/* START-social media content */}
      {newsArticles.length > 0 ? (
        newsArticles.map((article, index) => (
          <div
            key={index}
            className="w-auto rounded-[14px] ml-5 mr-5 mt-5 font-istokweb p-2 bg-[#faf9f9] flex  items-center  shadow-slate-300 border-3 shadow-md"
          >
            <div className="flex flex-row items-center">
              <img
                src="./assets/RahulGandhi.jpg"
                className="w-[200px] h-[200px] p-2 rounded-[10px]"
              />
              <div className="flex flex-col">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-1 text-[18px] font-bold text-[#2e05e2] font-istokweb"
                >
                  {article.headline || "No headline available"}
                </a>
                <h2 className="text-[18px] px-[12px] font-istokweb mt-2">
                  {article.description || "No description available"}
                </h2>
                <h2 className="text-[18px] px-[12px] font-istokweb mt-2">
                  {new Date(article.publishedAt)
                    .toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/\//g, "-") +
                    " " +
                    new Date(article.publishedAt).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    }) || "No description available"}
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
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default behavior
                  saveLink(article.id, "3"); // Pass article.id and userId manually
                }}
                className="font-istokweb text-[#ffffff] bg-[#03393D] p-3 m-1 text-center w-40 rounded-[14px] hover:bg-[#154f5c] hover:text-[#FFFFFF]"
              >
                Saved Links
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  deleteLink(article.id); // Pass the article ID to delete the link
                }}
                className="font-istokweb text-[#ffffff] bg-[#03393D] p-3 m-1 text-center w-40 rounded-[14px] hover:bg-[#154f5c] hover:text-[#FFFFFF]"
              >
                Not Relevant
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="ml-5 mr-5 mt-5">
          No news articles found for this leader.
        </p>
      )}

      {/* END-Social Media Content */}
    </>
  );
};

export default SocialMediaContent;
