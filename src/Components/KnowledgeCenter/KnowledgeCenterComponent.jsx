import React, { useRef, useState } from 'react';
import Trackerlabel from '../KnowledgeCenter/Trackerlabel';
import TrackerCard from '../KnowledgeCenter/TrackerCard';

// import '../../styles/carousel.css'; 
import { useEffect } from 'react';
import axios from 'axios'
const KnowledgeCenterComponent = () => {

  const [trackLeaderData, setTrackLeaderData] = useState(null); // Store API data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const TrackLeaderresponse = await axios.get('http://localhost:5196/api/TrackLeader/user/3');
        //console.log("get data leader");
        //console.log(TrackLeaderresponse.data); // Log the response data
        setTrackLeaderData(TrackLeaderresponse.data); // Store API data
      } catch (error) {
        console.error('Error fetching data:', error); // Handle error
      }
    };

    // Call the async function
    fetchData();

    // Cleanup function (optional, useful in some cases)
    return () => {
      // Clean up if necessary (e.g., canceling requests or resetting state)
    };
  }, []); 

  
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Handle the case when trackLeaderData is null (data hasn't been fetched yet)
  if (!trackLeaderData) return <div>Loading...</div>;
    // const cards = [<TrackerCard />]; // Customize this array
    // Map over trackLeaderData to create TrackerCard components
  const cards = trackLeaderData.map((data, index) => (
    <TrackerCard key={index} data={data} />
  ));
  
    const nextSlide = () => {
      if (currentIndex < cards.length - 2) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const prevSlide = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    return (
      <>      
      <div className="">
        <div className="flex min-w-min flex-col gap-5 ">
        
       <Trackerlabel text="Leader Tracker" />
          <div className="relative"> {/* Width set to 80% */}
            <div className="flex overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }} 
                ref={sliderRef}
              >
                {cards.map((card, index) => (
                  <div key={index} className="w-1/2 p-2">
                    {card}
                  </div>
                ))}
              </div>
            </div>
  
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0b9941] hover:bg-[#47be75] text-white p-2 ml-4 rounded">
            {"<<"}
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0b9941] hover:bg-[#47be75] text-white mr-4 p-2 rounded">
            {">>"}
            </button>
          </div>
        </div>
  
        <div className="flex flex-col gap-5  mt-2  ">
          <Trackerlabel text="Issue Tracker" />
          <div className="relative "> {/* Width set to 80% */}
            <div className="flex overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }} 
                ref={sliderRef}
              >
                {cards.map((card, index) => (
                  <div key={index} className="w-1/2 p-2">
                    {card}
                  </div>
                ))}
              </div>
            </div>
  
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0b9941] hover:bg-[#47be75] text-white p-2 rounded">
              {"<<"}
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0b9941] hover:bg-[#47be75] text-white p-2 rounded">
              {">>"}
            </button>
          </div>
        </div>
  
        <div className="flex flex-col gap-5   mt-2 ">
          <Trackerlabel text="Location Tracker" />
          <div className="relative  ">
            <div className="flex overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }} 
                ref={sliderRef}
              >
                {cards.map((card, index) => (
                  <div key={index} className="w-1/2 p-2">
                    {card}
                  </div>
                ))}
              </div>
            </div>
  
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0b9941] hover:bg-[#47be75] text-white p-2 rounded">
              {"<<"}
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0b9941] hover:bg-[#47be75] text-white p-2 rounded">
              {">>"}
            </button>
          </div>
        </div>
        </div>
      </>
    );
  };
  
export default KnowledgeCenterComponent
